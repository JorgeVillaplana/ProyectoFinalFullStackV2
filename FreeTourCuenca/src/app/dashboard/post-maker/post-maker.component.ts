import { LanguageService } from './../../services/language.service';
import { PostsService } from './../../services/posts.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Language } from '../../models/language.model';
import { Image } from '../../models/image.model';
import { Post } from './../../models/post.model';
import { PostDetail } from './../../models/postdetail.model';

@Component({
  selector: 'app-post-maker',
  templateUrl: './post-maker.component.html',
  styleUrls: ['./post-maker.component.scss']
})

export class PostMakerComponent implements OnInit {

  pForm: FormGroup
  froalaOptions: Object = {
    placeholder: 'Escribe aquí'
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private postService: PostsService,
    private languageService: LanguageService) {

      this.pForm = this.fb.group({
        language: [ 1 , Validators.required],
        title: ["", Validators.required],
        text: ["", Validators.required],
        categories: [""],
        route: ["", Validators.required],
        detail: [""],
        important: [false, Validators.required]
      })

     }

  get p(): any {
    return this.pForm.controls
  }


  ngOnInit() {
    window.scrollTo(0,0);
    this.loadLanguages()
    this.loadPosts()
  }

  languages: Array<Language> = []
  posts: Array<Post> = []
  categories: string[]= []
  newCategory = ""
  selLang: number = -1

  addCategory(data: string) {
    this.categories.push(data);
    data = "";
  }

  readPost(): Post {
    const post: Post = new Post()

    console.log("Berberecho: ", this.p.language.value)

    post.details = [{
      language: this.languages[this.p.language.value],
      title: this.p.title.value,
      categories: this.categories,
      text: this.p.text.value
    }]
    post.image = {
      detail: this.p.detail.value,
      route: this.p.route.value,
    }
    post.important = this.p.important.value
    console.log("Esto es el post: ", post)

    return post
  }

   loadPosts(){

    this.postService.getPosts().subscribe(
      (data: Post[]) => {
        this.posts = data
        console.log(data)
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  alert: boolean = false
  savePost() {
    this.alert = true
   this.postService.savePost(this.readPost()).subscribe(
      data => {
        console.log(data)
        this.loadPosts()
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  deletePost() {
   /*  this.postService.deletePost(id).subscribe(
      data => {
        console.log(data)
      },
      error => {
        console.log(error)
      }
    )
    */
  }


  loadLanguages() {
    this.languageService.getLanguages().subscribe(
      (data: Language[]) =>{
        this.languages = data
        console.log(data)
      },
      error => {
        console.log("Error: ", error);
      }
    );
  }

  onChangeLanguage(){
    /*
    *Si es nuevo
    */
   if(this.readPost() == new Post()){
     /** Comparar this.readPost con vacío para saber si se puede cambiar de idioma, si no,  */
   }
  }

}

