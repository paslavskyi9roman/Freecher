import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POSTS } from 'src/app/mock-posts';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  id: any;
  post: any;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((x: { get: (arg0: string) => any; }) => {
      this.id = x.get('id');
    });
  }

  ngOnInit(): void {
    this.post = POSTS.find(x=>x.id == this.id);
  }

}