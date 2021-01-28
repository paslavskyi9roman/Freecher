import { Component, OnInit } from '@angular/core';
export interface Posts {
  title: string,
  text: string,
  author: string,
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  posts: Posts[] = [
    {title: 'Post 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis turpis id urna ullamcorper consequat a sed lectus. Donec facilisis vitae elit non rhoncus. Curabitur quis nibh vel lacus elementum vestibulum vitae iaculis dolor. Aenean facilisis id mi sit amet laoreet. In efficitur tellus non hendrerit egestas. In ipsum odio, venenatis id nulla a, ornare pellentesque ante. Morbi in tortor vel nisi auctor accumsan. Aenean ac purus sit amet urna finibus tempus. Donec sem mauris, scelerisque vel orci sit amet, ultrices gravida mi. Nunc eget nisl vitae erat luctus sodales. ', author: 'Nickname'},
    { title: 'How to increase FPS in CyberPunk 2077', text: 'lorem 2 text', author: 'Nickname'},
    { title: 'Post21', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis turpis id urna ullamcorper consequat a sed lectus. Donec facilisis vitae elit non rhoncus. Curabitur quis nibh vel lacus elementum vestibulum vitae iaculis dolor. Aenean facilisis id mi sit amet laoreet. In efficitur tellus non hendrerit egestas. In ipsum odio, venenatis id nulla a, ornare pellentesque ante. Morbi in tortor vel nisi auctor accumsan. Aenean ac purus sit amet urna finibus tempus. Donec sem mauris, scelerisque vel orci sit amet, ultrices gravida mi. Nunc eget nisl vitae erat luctus sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis turpis id urna ullamcorper consequat a sed lectus. Donec facilisis vitae elit non rhoncus. Curabitur quis nibh vel lacus elementum vestibulum vitae iaculis dolor. Aenean facilisis id mi sit amet laoreet. In efficitur tellus non hendrerit egestas. In ipsum odio, venenatis id nulla a, ornare pellentesque ante. Morbi in tortor vel nisi auctor accumsan. Aenean ac purus sit amet urna finibus tempus. Donec sem mauris, scelerisque vel orci sit amet, ultrices gravida mi. Nunc eget nisl vitae erat luctus sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis turpis id urna ullamcorper consequat a sed lectus. Donec facilisis vitae elit non rhoncus. Curabitur quis nibh vel lacus elementum vestibulum vitae iaculis dolor. Aenean facilisis id mi sit amet laoreet. In efficitur tellus non hendrerit egestas. In ipsum odio, venenatis id nulla a, ornare pellentesque ante. Morbi in tortor vel nisi auctor accumsan. Aenean ac purus sit amet urna finibus tempus. Donec sem mauris, scelerisque vel orci sit amet, ultrices gravida mi. Nunc eget nisl vitae erat luctus sodales. ', author: 'Nickname'},
    {title: 'Post21', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis turpis id urna ullamcorper consequat a sed lectus. Donec facilisis vitae elit non rhoncus. Curabitur quis nibh vel lacus elementum vestibulum vitae iaculis dolor. Aenean facilisis id mi sit amet laoreet. In efficitur tellus non hendrerit egestas. In ipsum odio, venenatis id nulla a, ornare pellentesque ante. Morbi in tortor vel nisi auctor accumsan. Aenean ac purus sit amet urna finibus tempus. Donec sem mauris, scelerisque vel orci sit amet, ultrices gravida mi. Nunc eget nisl vitae erat luctus sodales. ', author: 'Nickname'},
    { title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    { title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    { title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
    {title: 'Post21', text: 'lorem 3 text', author: 'Nickname'},
  ]

}
