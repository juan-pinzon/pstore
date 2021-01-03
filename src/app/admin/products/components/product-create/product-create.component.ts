import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router'
import { AngularFireStorage } from '@angular/fire/storage';

import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { isPriceValidator } from 'src/app/utils/Validators'

import { ProductsService } from '@core/services/products/products.service'
import { CategoriesService } from '@core/services/categories/categories.service'
import { Product } from '@core/models/product.model';
import { Category } from '@core/models/category.model';

@Component({
	selector: 'app-product-create',
	templateUrl: './product-create.component.html',
	styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

	form: FormGroup
	id: string
	image$: Observable<any>
	categories$: Observable<Category[]>

	constructor(
		private formBuilder: FormBuilder,
		private productsService: ProductsService,
		private categoriesServices: CategoriesService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private afStorage: AngularFireStorage) {
		this.id = this.activatedRoute.snapshot.params.id
		this.buildForm()
	}

	ngOnInit(): void {
		this.getOne()
		this.getCategories()
	}

	saveOrUpdateProduct(event: Event) {
		event.preventDefault()
		this.form.markAllAsTouched()
		if (this.form.valid) {
			if (!this.id) {
				this.saveProduct()
			} else {
				this.updateProduct()
			}
		}
	}

	async saveProduct() {
		const product: Product = this.form.value
		try {
			await this.productsService.createProduct(product)
			await this.router.navigate(['./admin/products'])
		} catch (error) {
			alert('un grave error creando el producto')
			console.error(error)
		}
	}

	async updateProduct() {
		const product: Product = this.form.value
		try {
			await this.productsService.updateProduct(this.id, product)
			await this.router.navigate(['./admin/products'])
		} catch (e) {
			alert('Un error actualizando el producto')
			console.log(e)
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
			title: ['', [Validators.required, Validators.minLength(4)]],
			price: ['', [Validators.required, isPriceValidator]],
			description: ['', [Validators.required, Validators.minLength(10)]],
			category_id: ['', Validators.required],
			image: ['', Validators.required],
		})
	}

	private getCategories() {
		this.categories$ = this.categoriesServices.getCategories()
	}

	get titleField() {
		return this.form.get('title')
	}

	get priceField() {
		return this.form.get('price')
	}

	get descriptionField() {
		return this.form.get('description')
	}

	get imageField() {
		return this.form.get('image')
	}

	get categoryField() {
		return this.form.get('category_id')
	}

}
