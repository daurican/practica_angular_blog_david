import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  formPost: FormGroup;
  fb = inject(FormBuilder);
  postService = inject(PostService);
  router = inject(Router);

  constructor() {
    this.formPost = this.fb.group({
      titulo: [],
      texto: [],
      autor: [],
      imagen: [],
      categoria: []
    })
  }
}
