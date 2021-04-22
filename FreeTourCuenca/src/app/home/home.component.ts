import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToBooking(){
    this.router.navigate(['/booking']);
  }

}
