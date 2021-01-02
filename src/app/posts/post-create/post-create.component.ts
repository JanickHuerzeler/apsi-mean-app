import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter<Post>();

  constructor(public postsService: PostsService) { }

  onAddPost() {
    this.postsService.addPost(this.enteredTitle, this.enteredContent);
  }
}
