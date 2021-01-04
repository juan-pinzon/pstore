import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { OrderProduct } from '@core/models/orderProduct.model';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

	products$: Observable<Product[]>;
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private cartService: CartService
	) {
		this.buildForm()
		this.products$ = this.cartService.cart$
	}

	ngOnInit(): void {
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			name: ['', Validators.required],
			address: this.formBuilder.array([])
		})
	}

	addAddressField() {
		this.addressField.push(this.formBuilder.group({
			zip: ['', Validators.required],
			text: ['', Validators.required]
		}))
	}

	get addressField() {
		return this.form.get('address') as FormArray
	}

}
