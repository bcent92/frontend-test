import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Post } from '../models/post';

@Injectable({
	providedIn: 'root'
})
export class PostService {

	constructor(private apiService: ApiService) { }

	/**
	 * Format data to get Post object
	 * 
	 * @param data Data to format
	 */
	formatData(data: any) {
		return new Post(data['id'],
			data['title'],
			data['content'],
			data['lat'],
			data['long'],
			data['image_url'],
			data['created_at'],
			data['updated_at']);
	}

	list(): Observable<any> {
		return this.apiService.get('posts');
	}

	show(id: string): Observable<Post> {
		const params = new HttpParams().set('id', id);
		return this.apiService.get('posts', params);
	}

	remove(id: string) {
		return this.apiService.delete('posts/' + id);
	}
}
