import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/services/products/products.service'
import { Product } from '@core/models/product.model';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	products: Product[] = []
	displayedColumns: string[] = ['id', 'title', 'price', 'actions']

	constructor(
		private productService: ProductsService
	) { }

	ngOnInit(): void {
		this.fetchProducts()
	}

	fetchProducts() {
		this.productService.getAllProducts()
			.pipe(first())
			.subscribe(products => {
				this.products = products
			})
	}

	async deleteProduct(id: string) {
		const result = await this.productService.deleteProduct(id).toPromise() as boolean
		if (result) {
			this.products = this.products.filter(item => item.id !== id)
		}
	}

}
