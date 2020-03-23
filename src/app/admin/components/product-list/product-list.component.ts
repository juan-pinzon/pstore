import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/services/products/products.service'
import { Product } from 'src/app/core/models/product.model';

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
		// this.productService.createProduct({id: '460', title: 'hola taroal', description: 'muy bueno', price: 222, image: 'assets/'})
		// 	.subscribe(product => {
		// 		console.log(product)
		// 	})
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
