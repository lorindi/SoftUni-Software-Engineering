import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  constructor(private api: ApiService) {}
  ngOnInit(): void {
    this.api.getPosts(5).subscribe((posts) => {
      console.log(posts);
    });
  }
}
