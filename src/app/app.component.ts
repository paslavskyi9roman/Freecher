import { Component } from '@angular/core';

export interface Posts {
  title: string,
  text: string,
  author: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Posts[] = [
    {title: 'Post 1', text: 'lorem 1 text', author: 'Nickname'},
    {title: 'Post 2', text: 'lorem 2 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
  ]

}
