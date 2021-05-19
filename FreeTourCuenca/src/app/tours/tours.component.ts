import { Component, OnInit } from '@angular/core';
import { Tour } from './../models/tour.model';
import { ToursService } from './../services/tours.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor(private toursService: ToursService) { }

  tours: Array<Tour> = [];

  ngOnInit(): void {
    this.loadTours();

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
