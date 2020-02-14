import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/product.model';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

	products: Product[]

	constructor(private productsService: ProductsService) { }

	ngOnInit() {
		this.products = this.productsService.getAllProducts()
	}

	clickProduct(id: string) {
		console.log(id)
	}

}
