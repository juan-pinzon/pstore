import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PreloadService } from '@core/services/preload.service';

import { ContactComponent } from './components/contact/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AdminGuard } from '@core/guards/admin.guard';


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
				loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
				data: { preload: true }
			},
			{
				path: 'products',
				loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
				data: { preload: true }
			},
			{
				path: 'contact',
				component: ContactComponent
			},
			{
				path: 'order',
				loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
			},
		]
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
		canActivate: [AdminGuard]
	},
	{//Este se deja de último siempre
		path: '**',
		component: PageNotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {
		//preloadingStrategy: PreloadAllModules //Esto es para que se precarguen los módulos que se llaman onDemand o LazyLoading
		preloadingStrategy: PreloadService
	})],
	exports: [RouterModule],
	providers: [PreloadService]
})
export class AppRoutingModule { }
