import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from 'src/app/interfaces/ipost.interface';
import { PostService } from 'src/app/services/post.service';

type ErrorObj = { field: string, message: string };

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  posts: IPost[] = [];
  formPost: FormGroup;
  fb = inject(FormBuilder);
  postService = inject(PostService);
  router = inject(Router);
  errors: ErrorObj[] = [];

  constructor() {
    this.formPost = this.fb.group({
      titulo: [],
      texto: [],
      autor: [],
      imagen: [],
      categoria: [],
      fecha: []
    })
  }

  async onSubmit() {
    try {
      const response = await this.postService.createPost(this.formPost.value);

      this.router.navigate(['/posts'])

    } catch (errorCapturado: any) {
      this.errors = errorCapturado.error
    }
  }
}
