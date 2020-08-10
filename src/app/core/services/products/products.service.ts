import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

import { throwError, Observable } from 'rxjs'
import { map, catchError, retry } from 'rxjs/operators'

import { environment } from 'src/environments/environment'

import { HandleHttpResponseError } from 'src/app/utils/HandleHttpResponseError'

@Injectable({
	providedIn: 'root'
})
export class ProductsService {

	products: Product[] = []


	constructor(private httpClient: HttpClient) { }

	getAllProducts() {
		return this.httpClient.get<Product[]>(`${environment.url_api}/products`)
	}

	getProduct(id: string) {
		return this.httpClient.get<Product>(`${environment.url_api}/products/${id}`)
	}

	createProduct(product: Product) {
		return this.httpClient.post(`${environment.url_api}/products`, product)
	}

	updateProduct(id: string, changes: Partial<Product>) {
		return this.httpClient.put(`${environment.url_api}/products/${id}`, changes)
	}

	deleteProduct(id: string) {
		return this.httpClient.delete(`${environment.url_api}/products/${id}`)
	}

	getRandomUsers(): Observable<any[]> {
		return this.httpClient.get('https://randokldfjsdlmuser.me/api/?results=2')
		.pipe(
			retry(3),
			catchError(HandleHttpResponseError),
			map((response: any) => response.results),
		);
	}

	// private handleError(error: HttpErrorResponse) {
	// 	console.log(error);
	// 	return throwError('ups algo salio mal');
	// }
}
