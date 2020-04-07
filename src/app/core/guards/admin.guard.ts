import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {

	constructor(
		private authService: AuthService,
		private router: Router
	) {

	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.authService.isLogged()
			.pipe(
				map(user => {
					if (user !== null) { return true } else { return this.router.parseUrl('/auth/login') }
				})
			)
			// .tap(res => {
			// 	this.router.navigate(['/auth/login'])
			// })
	}

}
