import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor() { }

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
