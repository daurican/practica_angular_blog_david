import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private arrPosts: IPost[];


  constructor() {
    this.arrPosts = [
      {
        titulo: '',
        texto: '',
        autor: '',
        imagen: '',
        fecha: new Date(),
        categoria: ''
      }
    ]
  }

  createPost(post: IPost) {
    this.arrPosts.push(post);
  }

  getAllPosts(): IPost[] {
    return this.arrPosts;
  }

  getByCategoria(categoria: string): IPost[] {
    const categoriaFiltrada: IPost[] = [];

    for (let categoriaElegida of this.arrPosts) {
      if (categoriaElegida.categoria === categoria) {
        categoriaFiltrada.push(categoriaElegida);
      }
    }
    return categoriaFiltrada;
  }


}
