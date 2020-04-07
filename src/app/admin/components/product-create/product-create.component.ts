import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ProductsService } from 'src/app/core/services/products/products.service'
import { Product } from 'src/app/core/models/product.model';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { isPriceValidator } from 'src/app/utils/Validators'
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

	form: FormGroup
	id: string
	image$: Observable<any>

	constructor(
		private formBuilder: FormBuilder,
		private productsService: ProductsService,
		private router: Router,
		private activedRoute: ActivatedRoute,
		private afStorage: AngularFireStorage) {
		this.activedRoute.params.subscribe((params: Params) => {
			this.id = params.id
		})
		this.buildForm()
	}

	ngOnInit(): void {
		this.getOne()
	}

	saveOrUpdateProduct(event: Event) {
		event.preventDefault()
		if (!this.id) {
			this.saveProduct()
		} else {
			this.updateProduct()
		}
	}

	saveProduct() {
		if (this.form.valid) {
			const product: Product = this.form.value
			this.productsService.createProduct(product)
				.subscribe(response => {
					console.log(response)
					this.router.navigate(['./admin/products'])
				})
		}
	}

	updateProduct() {
		if (this.form.valid) {
			const product: Product = this.form.value
			this.productsService.updateProduct(this.id, product)
				.subscribe(response => {
					console.log(response)
					this.router.navigate(['./admin/products'])
				})
		}
	}

	getOne() {
		if (this.id) {
			this.productsService.getProduct(this.id)
				.subscribe(product => {
					this.form.patchValue(product)
				})
		}
	}

	uploadFile(event) {
		const file = event.target.files[0];
		const filename = `images/${file.name}`
		const fileRef = this.afStorage.ref(filename)
		const task = this.afStorage.upload(filename, file)

		task.snapshotChanges()
			.pipe(
				finalize(() => {
					this.image$ = fileRef.getDownloadURL()
					this.image$.subscribe(url => {
						this.form.get('image').setValue(url)
					})
				})
			)
			.subscribe()
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			id: ['', [Validators.required]],
			title: ['', [Validators.required]],
			price: ['', [Validators.required, isPriceValidator]],
			image: [''],
			description: ['', [Validators.required]]
		})
	}

	get priceField() {
		return this.form.get('price')
	}

}
