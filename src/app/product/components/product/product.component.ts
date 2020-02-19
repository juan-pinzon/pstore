import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core'
import { Product } from '../../../core/models/product.model'

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {

	@Input() product: Product
	@Output() productCliked: EventEmitter<string> = new EventEmitter()

	constructor() {
		//console.log('Constructor')
	}

	ngOnChanges(changes: SimpleChanges) {
		// console.log('ngOnchanges')
		// console.log(changes)
	}

	ngOnInit() {
		// console.log('Solo se ejecuta cuando está el componente en pantalla')
	}

	ngOnDestroy() {
		// console.log('Se destruyo')
	}

	addCart() {
		// console.log('Añadir al carrito')
		this.productCliked.emit(this.product.id)
	}
}
