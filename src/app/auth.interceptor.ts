import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		/**
		 * Se modifica el request
		 */
		request = request.clone({
			setHeaders: {
				Authorization: 'Bearer lfjsdvaofvdaf'
			}
		})

		return next.handle(request)
	}

}
