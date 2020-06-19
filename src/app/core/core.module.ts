import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './layouts/app-header/app-header.component';
import { AppFooterComponent } from './layouts/app-footer/app-footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
	declarations: [AppHeaderComponent, AppFooterComponent],
	imports: [
		HttpClientModule,
		CommonModule
	],
	exports: [AppHeaderComponent, AppFooterComponent]
})
export class CoreModule { }
