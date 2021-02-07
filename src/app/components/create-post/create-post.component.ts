import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public postForm: FormGroup;

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.postForm = this.formBuilder.group({
      title: [''],
      text: [''],
      author: ['']
    })      
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.postService.createPost(this.postForm.value);
    this.router.navigate(['']); 
   };
}