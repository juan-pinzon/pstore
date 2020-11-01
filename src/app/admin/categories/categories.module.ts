import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriesRoutingModule} from './categories-routing.module';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesFormComponent} from './components/categories-form/categories-form.component';
import {MaterialModule} from '../../material/material.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
	declarations: [CategoriesComponent, CategoriesFormComponent],
	imports: [
		CommonModule,
		CategoriesRoutingModule,
		MaterialModule,
		ReactiveFormsModule
	]
})
export class CategoriesModule {
}
