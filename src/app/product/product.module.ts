import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';



@NgModule({
	declarations: [
		ProductComponent,
		ProductDetailComponent,
		ProductsComponent
	],
	imports: [
		CommonModule,
		ProductRoutingModule
	]
})
export class ProductsModule { }
