import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthenticationService } from '../authentication.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly authService: AuthenticationService) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler,
    ): Observable<HttpEvent<any>> {
        if (!this.authService.isLoggedIn()) {
            return next.handle(req)
        }

        const authReq = req.clone({
            setHeaders: {
                Authorization: `basic ${this.authService.getToken()}`,
            },
        })

        return next.handle(authReq)
    }
}
