import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  PostComponent } from './components/post/post.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: PostComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create-post', component: CreatePostComponent},
  {path: 'post/:id', component: ViewPostComponent},
  {path: '**', component: PageNotFoundComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
