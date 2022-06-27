import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    ViewComponent,
    AddComponent,
    UpdateComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
