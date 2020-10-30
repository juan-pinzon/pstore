import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductCreateComponent} from './components/product-create/product-create.component';


const routes: Routes = [
	{
		path: '',
		component: ProductListComponent
	},
	{
		path: 'create',
		component: ProductCreateComponent
	},
	{
		path: 'edit/:id',
		component: ProductCreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ProductsRoutingModule {
}
