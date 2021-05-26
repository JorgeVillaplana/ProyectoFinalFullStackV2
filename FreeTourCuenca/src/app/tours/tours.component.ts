import { Component, OnInit } from '@angular/core';
import { faDog, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { Tour } from './../models/tour.model';
import { ToursService } from './../services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor(private toursService: ToursService) { }

  faWheelchair = faWheelchair
  faDog = faDog

  tours: Array<Tour> = [];

  ngOnInit(): void {
    this.loadTours();
    window.scrollTo(0,0);

  }

  loadTours() {
    this.toursService.getTours().subscribe(
      (data: Tour[]) => {
        this.tours = data
        console.log(data)
      },
      ( error: any) => {
        console.log("Error: ", error)
      }
    );
  }

}
