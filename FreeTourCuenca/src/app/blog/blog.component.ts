import { PostDetail } from './../models/postdetail.model';
import { Component, OnInit } from '@angular/core';
import { Text } from '../models/text.model'
import { Language } from '../models/language.model'
import { Post } from '../models/post.model'
import { PostsService } from './../services/posts.service';
import { SelectedlangService } from '../services/selectedlang.service';
import { SelectedtextService } from '../services/selectedtext.service';
import  { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  moment: any = moment;

  posts: Array<Post> = [];
  auxiliaryPosts: Array<Post> = [];
  selectedLang: Language = {}
  selectedText: Text = {}
  importantPosts: string[] = [];
  p: number = 1;


  constructor(
    private postService: PostsService,
    private selLangService: SelectedlangService,
    private selTextService: SelectedtextService
    ) { }

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.selectedLang = this.selLangService.language
    this.selectedText = this.selTextService.text
    this.loadPosts()
    this.checkCategories()
  }

  loadPosts(){
    this.postService.getPostByLang(this.selectedLang).subscribe(
      (data: Post[]) => {
        this.posts = data
        this.auxiliaryPosts = this.posts
        this.getLastsImportantPost()
        console.log(data)
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  categories = ["cultura", "historia", "ciudad"]

  onSelectedCategory(data: string){
    // this.auxiliaryPosts = this.posts.filter( post => {
    //   post.details.filter( detail => {
    //     detail.categories.filter( category => {
    //       category == data
    //     })
    //   })
    // })
  }

  checkCategories(){
    let check = false
    /*let i = 0
    let j

    while(i < this.posts.length && check){
      if(this.posts[i]){
        j = 0
          while(j < this.posts[i].details.length && check){
            if(this.posts[i].details[j]!){
              if(this.posts[i].details[j]!.categories?.length > 0){
                check = true
                return check
              }
            }
            j++
          }
        }
      }
      i++
    }*/

    return check
  }

  getLastsImportantPost(){
    let i = 0

    if(this.posts.length >= 4){
      while(this.importantPosts.length <= 4 && i < this.posts.length){
        if(this.posts[i]){
          if(this.posts[i].important == true){
            const title = this.posts[i].details![0].title
            this.importantPosts.push(title ? title : 'Error')
          }
        }
        i++
      }
    }
    console.log("Important posts: ", this.importantPosts)
    this.importantPosts.forEach(
      derp => {
        console.log(derp)
      }
    )
  }

  faArrowUp = faArrowUp

  toTop() {
    window.scrollTo(0,0);
  }
}
