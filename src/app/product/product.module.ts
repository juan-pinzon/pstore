import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './containers/products/products.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
	declarations: [
		ProductComponent,
		ProductDetailComponent,
		ProductsComponent
	],
	imports: [
		CommonModule,
		ProductRoutingModule,
		MaterialModule
	]
})
export class ProductModule { }
