import { Component, OnInit } from '@angular/core';
import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

import { tap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products$: Observable<Product[]>

	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		this.fetchProducts()
	}

	clickProduct(id: string) {
		console.log(id)
	}

	fetchProducts() {
		this.products$ = this.productsService.getAllProducts()
	}

}
