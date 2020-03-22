import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';


const routes: Routes = [
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				redirectTo: '/home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
			},
			{
				path: 'products',
				loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
			},
			{
				path: 'contact',
				component: ContactComponent
			},
		]
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
	},
	{//Este se deja de último siempre
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		preloadingStrategy: PreloadAllModules //Esto es para que se precarguen los módulos que se llaman onDemand o LazyLoading
	})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
