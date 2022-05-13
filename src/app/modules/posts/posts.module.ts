import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts.routing-module';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [...PostsRoutingModule.components],
})
export class PostsModule {}

// GET https://jsonplaceholder.typicode.com/posts
// GIT URL https://github.com/browsepedia/angular-training
