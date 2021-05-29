import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectedtextService } from '../services/selectedtext.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

  goToBooking(){
    this.router.navigate(['/tours']);
  }

}
