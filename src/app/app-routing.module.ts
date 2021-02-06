import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  PostComponent } from './components/post/post.component'
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path: '', component: PostComponent },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'create-post', component: CreatePostComponent, canActivate: [AuthGuard]},
  {path: 'post/:id', component: ViewPostComponent},
  {path: '**', component: PageNotFoundComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'email-verification', component: VerifyEmailComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
