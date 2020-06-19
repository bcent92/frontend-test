import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/core/models/post';
import { map, tap } from 'rxjs/operators';
import { PostService } from 'src/app/core/services/post.service';
import { HttpResponse } from '@angular/common/http';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

	posts: Post[];

	constructor(private route: ActivatedRoute,
		private router: Router,
		private postService: PostService) { }

	ngOnInit(): void {
		this.route.data.pipe(
				map(response => response['posts'].body),
				tap(posts => console.log('posts', posts))
			)
			.subscribe(posts => {
				let formattedPosts = [];
				for (const i in posts) {
					if (posts[i]) {
						formattedPosts.push(this.postService.formatData(posts[i]));
					}
				}
				this.posts = formattedPosts;
			});
	}

	removePost(id: string) {
		this.postService.remove(id).subscribe((response) => {
			if (response.status === 204) {
				
			}
		});	
	}
}
