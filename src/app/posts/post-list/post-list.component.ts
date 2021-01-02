import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent implements OnInit, OnDestroy {
  // posts=[
  //   {title: 'First Post', content:'This is the first post\'s content'},
  //   {title: 'Second Post', content:'This is the second post\'s content'},
  //   {title: 'Third Post', content:'This is the third post\'s content'}
  // ];
  // private postUpdated = new Subject<Post[]>();


  posts: Post[] = [];
  private PostSub: Subscription | undefined;
  constructor(public postsService: PostsService) {

  }

  ngOnInit() {
    this.postsService.getPosts();
    this.PostSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });

  }

  ngOnDestroy() {
    this.PostSub?.unsubscribe();
  }

  onDelete(postId: string) {
   this.postsService.deletePost(postId);
  }
  // getPosts() {
  //   this.http.get('http://localhost:3000/api/posts');
  // }

  // getPostUpdateListener() {
  //   return this.postUpdated
  // }
}
