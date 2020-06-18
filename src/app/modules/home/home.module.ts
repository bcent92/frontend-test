import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { ShowComponent } from './pages/show/show.component';
import { HomeRoutingModule } from './home.routing';



@NgModule({
	declarations: [ListComponent, CreateComponent, ShowComponent],
	imports: [
		CommonModule,
		HomeRoutingModule
	]
})
export class HomeModule { }
