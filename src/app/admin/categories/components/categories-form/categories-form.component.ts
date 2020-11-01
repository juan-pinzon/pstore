import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Category} from '@core/models/category.model';
import {CategoriesService} from '@core/services/categories/categories.service';
import {Router} from '@angular/router';
import {finalize, map} from 'rxjs/operators';


@Component({
	selector: 'app-categories-form',
	templateUrl: './categories-form.component.html',
	styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {

	form: FormGroup
	id: string
	percentageProgressBar = 0
	showProgressBar = false
	filename: string

	constructor(
		private formBuilder: FormBuilder,
		private categoriesService: CategoriesService,
		private router: Router
	) {
		this.buildForm()
	}

	ngOnInit(): void {
		this.getCategory()
	}

	saveOrUpdateCategory(event: Event): void {
		event.preventDefault()
		this.form.markAllAsTouched()
		if (this.form.valid) {
			this.form.disable()
			if (!this.id) {
				this.saveCategory()
			} else {
				this.updateCategory()
			}
		}
	}

	async saveCategory() {
		const category: Category = this.form.value
		try {
				await this.categoriesService.createCategory(category)
				await this.router.navigate(['/admin/categories'])
		} catch (error) {
			this.form.enable()
			console.error(error)
		}
	}

	getCategory() {

	}

	updateCategory() {

	}


	private buildForm(): void {
		this.form = this.formBuilder.group({
			name: ['', Validators.required],
			image: ['', Validators.required]
		})
	}

	get nameField() {
		return this.form.get('name')
	}

	get imageField() {
		return this.form.get('image')
	}

	uploadFile(event) {
		this.showProgressBar = true
		const image = event.target.files[0] as File
		const path = `categories/${image.name}`
		const { task, ref } = this.categoriesService.uploadImage(image, path)

		task.percentageChanges()
			.pipe(map(Math.ceil))
			.pipe(finalize(() => {
				const urlImage = ref.getDownloadURL()
				urlImage.subscribe(url => {
					this.imageField.setValue(url)
					this.filename = image.name
				})
				this.showProgressBar = false
			}))
			.subscribe(per => {
				this.percentageProgressBar = per
			})
	}
}
