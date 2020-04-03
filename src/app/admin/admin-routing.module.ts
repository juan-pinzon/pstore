import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';


const routes: Routes = [
	{
		path: '',
		component: NavComponent,
		children: [
			{
				path: 'create',
				component: ProductFormComponent
			},
			{
				path: 'products',
				component: ProductListComponent
			},
			{
				path: 'products/create',
				component: ProductCreateComponent
			},
			{
				path: 'products/edit/:id',
				component: ProductCreateComponent
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
