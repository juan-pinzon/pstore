import {Component, OnInit} from '@angular/core';

import {first} from 'rxjs/operators';

import {CategoriesService} from '@core/services/categories/categories.service';
import {Category} from '@core/models/category.model';


@Component({
	selector: 'app-categories',
	templateUrl: './categories.component.html',
	styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

	categories: Category[] = []
	displayedColumns: string[] = ['id', 'name', 'image', 'actions']

	constructor(
		private categoriesService: CategoriesService
	) {
	}

	ngOnInit(): void {
		this.getCategories()
	}

	getCategories() {
		this.categoriesService.getCategories()
			.pipe(first())
			.subscribe(categories => {
				this.categories = categories
			})
	}

}
