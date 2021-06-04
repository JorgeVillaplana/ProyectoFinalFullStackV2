import { Tour } from './../models/tour.model';
import { ToursService } from './../services/tours.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SelectedlangService } from '../services/selectedlang.service';
import { SelectedtextService } from '../services/selectedtext.service';
import { MailerService } from '../services/mailer.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  mForm: FormGroup

  tour: Tour = {}
  id: string | null = ""
  toMailer = {}

  constructor(private fb: FormBuilder,
    private router: Router,
    private service: ToursService,
    private ActivatedRoute: ActivatedRoute,
    private selLangService: SelectedlangService,
    private selTextService: SelectedtextService,
    private mailerService: MailerService) {

    /*this.router.events.subscribe((currentUrl) => {
      if (currentUrl instanceof NavigationEnd) {
        this.id = ActivatedRoute.snapshot.paramMap.get("id")
      }
    })*/

      this.mForm = this.fb.group({
        name: ["", Validators.required],
        email: ["",[ Validators.required, Validators.email]],
        seats: [1, [Validators.required, Validators.max(9)]],
        date: ["", Validators.required],
        time: ["", Validators.required],
      })
    }

  get m(): any {
    return this.mForm.controls
  }

  ngOnInit() {
    let today = new Date;
    //this.loadTour()
  }

  readForm(){

    this.tour.tourDetails?.find(
      tourDetail => {
        tourDetail.tourdates?.find(
          date => {
            date.day == this.m.date.value
            date.timePicker?.find(
              time => {
                time.hour == this.m.hour.value
                time.remainingSeats -= this.m.seats.value
              }
            )
          }
        )
      }
    )

    this.toMailer = {
      name: this.m.name.value,
      email: this.m.email.value,
      date: this.m.date.value,
      hour: this.m.time.value,
      quantity: this.m.seats.value,
      tour: this.tour.name
    }

  }

  loadTour() {
   this.service.getTour(this.id).subscribe(
    (data: Tour) => {
      this.tour = data
    },
    error => {
      console.log("Error:", error);
    }
  );
}

 alert: boolean = false

  saveTickets() {
    this.alert = true
    this.service.updateTour(this.tour).subscribe(
      data => {
        this.mailerService.sendConfirmation(this.toMailer).subscribe(
          data => {
            this.alert = true
          },
          error => {
            console.log("Error: ", error)
          }
        )
        this.mailerService.sendToMe(this.toMailer).subscribe(
          data => {
          },
          error => {
            console.log("Error: ", error)
          }
        )
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }
}
