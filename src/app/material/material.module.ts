import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		LayoutModule,
		MatIconModule,
		MatButtonModule,
		MatBadgeModule,
		MatToolbarModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatTableModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatStepperModule,
		MatProgressBarModule
	],
	exports: [
		LayoutModule,
		MatIconModule,
		MatButtonModule,
		MatBadgeModule,
		MatToolbarModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatRadioModule,
		MatTableModule,
		MatToolbarModule,
		MatButtonModule,
		MatSidenavModule,
		MatIconModule,
		MatListModule,
		MatStepperModule,
		MatProgressBarModule
	]
})
export class MaterialModule { }
