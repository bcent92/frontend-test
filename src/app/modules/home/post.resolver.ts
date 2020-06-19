import { Injectable } from '@angular/core';

import { Resolve, RouterStateSnapshot } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from 'src/app/core/services/post.service';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PostResolver implements Resolve<any> {

	constructor(private postService: PostService) { }

	resolve(route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot) {                     
		if (route.paramMap.get('id')) {
			return this.postService.show(route.paramMap.get('id')).pipe(catchError(error => {
				return error;
			}));
		}

		return this.postService.list().pipe(catchError(error => {
			return error;
		}));
	}
}
