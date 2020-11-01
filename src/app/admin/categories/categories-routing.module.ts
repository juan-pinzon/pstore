import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoriesFormComponent} from './components/categories-form/categories-form.component';


const routes: Routes = [
	{
		path: '',
		component: CategoriesComponent
	},
	{
		path: 'create',
		component: CategoriesFormComponent
	},
	{
		path: 'edit/:idCategory',
		component: CategoriesFormComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CategoriesRoutingModule {
}
