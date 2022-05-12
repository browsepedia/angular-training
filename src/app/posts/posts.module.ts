import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts.routing-module';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [...PostsRoutingModule.components],
})
export class PostsModule {}
