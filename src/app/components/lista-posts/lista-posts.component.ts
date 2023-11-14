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
  arrCategorias: string[] = [
    'Lovecraft y Otros Autores',
    'Literatura de los Mitos',
    'Dioses Exteriores',
    'Dioses Primigenios',
    'Dioses Arquetípicos',
    'Criaturas de los Mitos',
    'Personajes Destacados'
  ];




  postService = inject(PostService);

  mostrarTraducido = false;


  ngOnInit() {
    this.posts = this.postService.getAllPosts();


  }

  OnChangeCategory($event: any) {
    if ($event.target.value === 'Todos') {
      this.posts = this.postService.getAllPosts();
    } else {
      this.posts = this.postService.getByCategoria($event.target.value);
    }

  }


  onClickMostrar() {
    this.mostrarTraducido = !this.mostrarTraducido;
  }

}
