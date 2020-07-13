import { Component, OnInit } from '@angular/core';

import { ProductsService } from '@core/services/products/products.service'
import { Product } from '@core/models/product.model';

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
			.subscribe(products => {
				this.products = products
			})
	}

	deleteProduct(id: string) {
		this.productService.deleteProduct(id)
			.subscribe((response) => {
				if (response) {
					this.products = this.products.filter(item => item.id !== id)
				}
			})
	}

}
