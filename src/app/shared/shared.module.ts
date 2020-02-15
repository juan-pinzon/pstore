import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
	declarations: [
		ExponentialPipe,
		HighlightDirective,
		HeaderComponent,
		FooterComponent
	],
	exports: [
		ExponentialPipe,
		HighlightDirective,
		HeaderComponent,
		FooterComponent
	],
	imports: [
		CommonModule
	]
})
export class SharedModule { }
