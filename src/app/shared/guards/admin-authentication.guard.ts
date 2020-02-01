import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router'
import { AuthenticationService } from '../authentication.service'

@Injectable({
    providedIn: 'root',
})
export class AdminAuthenticationGuard implements CanActivate, CanLoad {
    constructor(
        private readonly authService: AuthenticationService,
        private readonly router: Router,
    ) {}

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Promise<boolean> {
        return this.canAccess()
    }

    async canLoad(route: Route, segments: UrlSegment[]): Promise<boolean> {
        return this.canAccess()
    }

    private async canAccess() {
        if (!this.authService.isLoggedIn()) {
            await this.router.navigateByUrl('/auth/login')
            return false
        }

        if (!this.authService.isAdmin()) {
            await this.router.navigateByUrl('/')
            return false
        }
        return true
    }
}
