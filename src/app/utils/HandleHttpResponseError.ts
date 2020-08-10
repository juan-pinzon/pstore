import { HttpErrorResponse} from '@angular/common/http'

import { throwError, Observable } from 'rxjs'

export function HandleHttpResponseError(error: HttpErrorResponse): Observable<never> {
	console.log(error)
	return throwError('Mi mensaje de error')
}
