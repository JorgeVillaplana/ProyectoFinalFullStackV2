import { Component, OnInit } from '@angular/core';
import { Text } from '../models/text.model'
import { Language } from '../models/language.model'
import { Post } from '../models/post.model'
import { PostsService } from './../services/posts.service';
import { SelectedlangService } from '../services/selectedlang.service';
import { SelectedtextService } from '../services/selectedtext.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Array<Post> = [];
  selectedLang: Language = {}
  selectedText: Text = {}

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
  }

  loadPosts(){
    this.postService.getPostByLang(this.selectedLang).subscribe(
      (data: Post[]) => {
        this.posts = data
        console.log(data)
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

}
