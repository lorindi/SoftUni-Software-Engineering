import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Post } from '../../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getPosts(5).subscribe((posts) => {
    //   console.log(posts);
    //   this.posts = posts;

    //   setTimeout(() => {
    //     this.isLoading = false;
    //   }, 2000);
    // });

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        this.posts = posts;

        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      },
      error: (err) => {
        this.isLoading = false;
        console.error('Error: ', err);
      },
    });
  }
}
