import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'main', component: MainScreenComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    FooterComponent,
    MainScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
