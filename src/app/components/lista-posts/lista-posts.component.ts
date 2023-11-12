import { Component, inject } from '@angular/core';
import { IPost } from 'src/app/interfaces/ipost.interface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent {

  posts: IPost[] = [];


  postService = inject(PostService);


  ngOnInit() {
    this.posts = this.postService.getAllPosts();

  }

}
