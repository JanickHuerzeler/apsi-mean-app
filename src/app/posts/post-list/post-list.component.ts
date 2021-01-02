import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit {
  // posts=[
  //   {title: 'First Post', content:'This is the first post\'s content'},
  //   {title: 'Second Post', content:'This is the second post\'s content'},
  //   {title: 'Third Post', content:'This is the third post\'s content'}
  // ];
  // private postUpdated = new Subject<Post[]>();


  posts: Post[] = [];
  constructor(public postsService: PostsService) {

  }

  ngOnInit() {
    this.posts = this.postsService.getPosts();
  }

  // getPosts() {
  //   this.http.get('http://localhost:3000/api/posts');
  // }

  // getPostUpdateListener() {
  //   return this.postUpdated
  // }
}
