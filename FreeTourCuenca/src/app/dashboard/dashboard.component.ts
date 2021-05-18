import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  hideContent() {
    if(this.router.url === "/dashboard"){
      return true
    } else return false
  }


  ngOnInit(): void {
  }

}
