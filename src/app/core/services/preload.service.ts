import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route, RouteConfigLoadEnd } from '@angular/router'
import { Observable, of } from 'rxjs';

@Injectable()
export class PreloadService implements PreloadingStrategy {

	preload(route: Route, load: () => Observable<any>): Observable<any> {
		if (route.data && route.data['preload']) {
			return load()
		} else {
			return of(null)
		}
	}
}
