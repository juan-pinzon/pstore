import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ProductsService } from 'src/app/core/services/products/products.service'
import { Product } from 'src/app/core/models/product.model';
import { Router } from '@angular/router'

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

	form: FormGroup

	constructor(
		private formBuilder: FormBuilder,
		private productsService: ProductsService,
		private router: Router) {
		this.buildForm()
	}

	ngOnInit(): void {
	}

	saveProduct(event: Event) {
		event.preventDefault()
		if (this.form.valid) {
			const product: Product = this.form.value
			this.productsService.createProduct(product)
				.subscribe(response => {
					console.log(response)
					this.router.navigate(['./admin/products'])
				})
		}
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			id: ['', [Validators.required]],
			title: ['', [Validators.required]],
			price: ['', [Validators.required]],
			image: [''],
			description: ['', [Validators.required]]
		})
	}

}
