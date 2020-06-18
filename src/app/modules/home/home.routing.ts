import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';

export const routes: Routes = [
	{
		path: '',
		component: ListComponent
	},
	{
		path: '/show/:id',
		component: ShowComponent
	},
	{
		path: '/create/:id',
		component: CreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [
	]
})
export class HomeRoutingModule { }