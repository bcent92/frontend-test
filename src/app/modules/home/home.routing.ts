import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { ShowComponent } from './pages/show/show.component';
import { CreateComponent } from './pages/create/create.component';
import { PostResolver } from './post.resolver';

export const routes: Routes = [
	{
		path: '',
		component: ListComponent,
		resolve: {
			posts: PostResolver
		}
	},
	{
		path: '/show/:id',
		component: ShowComponent,
		resolve: {
			posts: PostResolver
		}
	},
	{
		path: '/create',
		component: CreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
	providers: [
		PostResolver
	]
})
export class HomeRoutingModule { }