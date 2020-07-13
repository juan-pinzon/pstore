import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	product: Product

	constructor(
		private route: ActivatedRoute,
		private productService: ProductsService
	) { }

	ngOnInit(): void {
		this.route.params.subscribe((param: Params) => {
			const id = param.id
			this.fetchProduct(id)
			console.log(this.product)
		})
	}

	fetchProduct(id: string) {
		this.productService.getProduct(id)
			.subscribe(product => {
				this.product = product
			})
	}

}
