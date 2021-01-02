import { Component, Input } from '@angular/core';
// import {HttpClient} from '@angular/common/http';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  // posts=[
  //   {title: 'First Post', content:'This is the first post\'s content'},
  //   {title: 'Second Post', content:'This is the second post\'s content'},
  //   {title: 'Third Post', content:'This is the third post\'s content'}
  // ];
  @Input() posts:Post[] = [];
  // constructor(private http: HttpClient ){

  // }
}