import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';

import { ProductListComponent } from './components/product-list/product-list.component';


@NgModule({
	declarations: [ProductFormComponent, NavComponent, ProductListComponent],
	imports: [
		CommonModule,
		AdminRoutingModule,
		ReactiveFormsModule,
		MaterialModule,
	]
})
export class AdminModule { }
