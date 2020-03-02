import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatIconModule,
		MatButtonModule,
		MatBadgeModule,
		MatToolbarModule,
		MatCardModule
	],
	exports: [
		MatIconModule,
		MatButtonModule,
		MatBadgeModule,
		MatToolbarModule,
		MatCardModule
	]
})
export class MaterialModule { }
