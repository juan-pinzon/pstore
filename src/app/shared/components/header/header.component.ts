import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { Product } from 'src/app/core/models/product.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	total$: Observable<number>

	constructor(
		private cartService: CartService
	) { }

	ngOnInit(): void {
		this.total$ = this.cartService.cart$
			.pipe(
				map(products => products.length)
			)
	}

}
