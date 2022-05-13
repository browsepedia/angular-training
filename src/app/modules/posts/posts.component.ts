import { Component, OnInit } from '@angular/core';
import { PostsService } from '@core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  constructor(_service: PostsService) {
    _service.getAll().subscribe(console.log);
  }

  ngOnInit() {}
}
