import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPostList().subscribe(res => {
      this.posts = res.map( e => {
        return {
          id: e.payload.doc.id,
        } as Post;
      })
    });  
  }

  removePost = post => this.postService.deletePost(post);
  
}