import { Component, OnInit } from '@angular/core';
import { POSTS } from '../../mock-posts'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts = POSTS

  constructor() { }

  ngOnInit(): void {
  }

}
