import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  title: string = 'Title'
  text: string = 'Lorem text'
  author: string = 'Nickname'
  
  constructor() { }

  ngOnInit(): void {
  }

}
