import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs'
import { switchMap } from 'rxjs/operators'

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

	product$: Observable<Product>

	constructor(
		private route: ActivatedRoute,
		private productService: ProductsService
	) { }

	ngOnInit(): void {
		this.product$ = this.route.params
			.pipe(
				switchMap((params: Params) => this.productService.getProduct(params.id))
			)
	}

}
