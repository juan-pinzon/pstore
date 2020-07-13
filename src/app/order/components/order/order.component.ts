import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';
import { OrderProduct } from '@core/models/orderProduct.model';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

	products$: Observable<Product[]>;

	constructor(
		private cartService: CartService
	) {
		this.products$ = this.cartService.cart$
	}

	ngOnInit(): void {
	}

}
