import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from './products/components/product-form/product-form.component';
import { NavComponent } from './components/nav/nav.component';
import {BasicFormComponent} from './components/basic-form/basic-form.component';


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
				loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
			},
			{
				path: 'basic',
				component: BasicFormComponent
			},
			{
				path: 'categories',
				loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AdminRoutingModule { }
