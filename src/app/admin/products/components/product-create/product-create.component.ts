import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { ProductsService } from '@core/services/products/products.service'
import { Product } from '@core/models/product.model';
import { Router, ActivatedRoute } from '@angular/router'

import { isPriceValidator } from 'src/app/utils/Validators'
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize, first } from 'rxjs/operators';
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
		private activatedRoute: ActivatedRoute,
		private afStorage: AngularFireStorage) {
		this.id = this.activatedRoute.snapshot.params.id
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

	async saveProduct() {
		if (this.form.valid) {
			const product: Product = this.form.value
			try {
				await this.productsService.createProduct(product)
				await this.router.navigate(['./admin/products'])
			} catch (error) {
				alert('un grave error creando el producto')
				console.error(error)
			}
		}
	}

	async updateProduct() {
		if (this.form.valid) {
			const product: Product = this.form.value
			try {
				await this.productsService.updateProduct(this.id, product)
				await this.router.navigate(['./admin/products'])
			} catch (e) {
				alert('Un error actualizando el producto')
				console.log(e)
			}
		}
	}

	getOne() {
		if (this.id) {
			this.form.disable()
			this.productsService.getProduct(this.id)
			.subscribe(product => {
				if (product) {
					// this.form.addControl('id', this.formBuilder.control(null, Validators.required))
					this.form.patchValue(product)
					this.form.enable()
				}
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
			// id: ['', [Validators.required]],
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
