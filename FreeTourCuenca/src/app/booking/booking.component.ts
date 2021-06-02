import { Tour } from './../models/tour.model';
import { ToursService } from './../services/tours.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectedlangService } from '../services/selectedlang.service';
import { SelectedtextService } from '../services/selectedtext.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  mForm: FormGroup

  tour: Tour = {}
  id: string | null = ""

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: ToursService,
    private ActivatedRoute: ActivatedRoute) {
    /* private location: Location)

    this.router.events.subscribe((currentUrl) => {
      if (currentUrl instanceof NavigationEnd) {
        this.id = ActivatedRoute.snapshot.paramMap.get("id")
      }
    })

    */

      this.mForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required, Validators.email],
        seats: ["", Validators.required, Validators.max(9)],
        date: ["", Validators.required],
        time: ["", Validators.required],
      })
    }

  get m(): any {
    return this.mForm.controls
  }

  ngOnInit() {
    let today = new Date;
    this.loadTour()
  }

  loadTour() {
 /*  this.service.getTour(this.id).subscribe(
    (data: Tour) => {
      this.tour = data
    },
    error => {
      console.log("Error:", error);
    }
  );
  */
}

 alert: boolean = false

 saveTickets() {
     this.alert = true
    }
}
