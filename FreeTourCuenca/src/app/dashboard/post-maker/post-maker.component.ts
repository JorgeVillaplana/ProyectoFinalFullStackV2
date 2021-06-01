import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-maker',
  templateUrl: './post-maker.component.html',
  styleUrls: ['./post-maker.component.scss']
})

export class PostMakerComponent implements OnInit {

  pForm: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router) {
      this.pForm = this.fb.group({
        language: ["", Validators.required],
        postname: ["", Validators.required],
        froala: ["", Validators.required],
        tags: ["", Validators.required],
      })
     }

     /* get m(): any {
      return this.pForm.controls
    }
    */

  ngOnInit() {
    window.scrollTo(0,0);
  }

  languages = [
    {
      _id: 'tiruri',
      code: 'en',
      name: 'Español',
    },
    {
    _id: 'kjhgv',
    code: 'en',
    name: 'English',
  }]

  categories = [] as any
  newCategory = ""

  addCategory(data: any) {
    this.categories.push(data);
    data.value = "";
  }

  savePost() {}
}
