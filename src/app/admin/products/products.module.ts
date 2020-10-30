import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductCreateComponent } from './components/product-create/product-create.component'
import { ProductFormComponent } from './components/product-form/product-form.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../material/material.module';


@NgModule({
	declarations: [
		ProductCreateComponent,
		ProductFormComponent,
		ProductListComponent
	],
	imports: [
		CommonModule,
		ProductsRoutingModule,
		ReactiveFormsModule,
		MaterialModule,
	]
})
export class ProductsModule { }
