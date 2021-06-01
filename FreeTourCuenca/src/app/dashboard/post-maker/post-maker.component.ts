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
        title: ["", Validators.required],
        details: ["", Validators.required],
        categories: ["", Validators.required],
        image: ["", Validators.required]
      })
     }

     get p(): any {
      return this.pForm.controls
    }


  ngOnInit() {
    window.scrollTo(0,0);
  }

  // esto quitarlo y subirlo de API
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

  savePost() {
   /* las dejo comentadas por si son el caos

   this.postService.savePost(this.readPost(¿?)).subscribe(data => {
      console.log(data)
    },
    error => {
      console.log("Error: ", error)
    })
    this.loadPosts()

  */
  }

  loadPosts(){
    /*
    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data
        console.log(data)
      },
      error => {
        console.log("Error: ", error)
      }
    )
    */
  }

}

