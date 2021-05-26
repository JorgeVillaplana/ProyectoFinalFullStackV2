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


  createTour(){
    this.router.navigate(['/dashboard/tour-maker']);
  }

  editTour(){}
  deleteTour(){}


  hideContent() {
    if(this.router.url === "/dashboard"){
      return true
    } else return false
  }


  ngOnInit() {
    window.scrollTo(0,0); // AQUÍ NO FUNCIONA POR ALGÚN MOTIVO
  }

}
