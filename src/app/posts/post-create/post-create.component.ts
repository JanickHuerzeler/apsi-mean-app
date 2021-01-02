import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'This is a Post'

  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
