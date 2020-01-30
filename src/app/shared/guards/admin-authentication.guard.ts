import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AuthenticationService } from '../../authentication/authentication.service'

@Injectable({
    providedIn: 'root',
})
export class AdminAuthenticationGuard implements CanActivate, CanLoad {
    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return this.canAccess()
    }

    canLoad(
        route: Route,
        segments: UrlSegment[],
    ): Observable<boolean> | Promise<boolean> | boolean {
        return this.canAccess()
    }

    private canAccess() {
        if (!this.authService.isLoggedIn()) {
            this.router.navigateByUrl('/auth/login')
            return false
        }

        if (!this.authService.isAdmin()) {
            this.router.navigateByUrl('/')
            return false
        }
        return true
    }
}
