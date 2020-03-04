import { Injectable } from '@angular/core';
import { Product } from 'src/app/core/models/product.model';
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'

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
}
