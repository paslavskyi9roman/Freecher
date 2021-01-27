import { Component, OnInit } from '@angular/core';
export interface Posts {
  title: string,
  text: string,
  author: string
}
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

  posts: Posts[] = [
    {title: 'Post 1', text: 'lorem 1 text', author: 'Nickname'},
    {title: 'How to increase FPS in CyberPunk 2077', text: 'lorem 2 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
  ]

}
