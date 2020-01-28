import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import { Credentials } from '../models/credentials'
import { Role } from '../models/role.enum'
import { User } from '../models/user'

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    private user: User

    constructor(private readonly httpClient: HttpClient) {
    }

    login({ email, password }: Credentials) {
        return this.httpClient
            .get('http://localhost:8080/login', {
                withCredentials: true,
                headers: {
                    'Authorization': `basic ${btoa(`${email}:${password}`)}`,
                    'X-Requested-With': 'XMLHttpRequest', // Prevent browser auth dialog
                },
            })
            .pipe(
                tap((response: User | any) => {
                    // Intercept and save user if correct response
                    if ('id' in response) {
                        this.user = response
                    }
                }),
            )
    }

    getUser() {
        return this.user
    }

    isLoggedIn(): boolean {
        return typeof this.user !== 'undefined'
    }

    isAdmin(): boolean {
        return this.isLoggedIn() && this.user.role === Role.ADMIN
    }

    logout() {
        this.user = undefined
    }
}
