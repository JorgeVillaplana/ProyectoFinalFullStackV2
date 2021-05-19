import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  mForm: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router) {

      this.mForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required],
        seats: ["", Validators.required],
        date: ["", Validators.required],
        time: ["", Validators.required],
      })
    }


  ngOnInit() {
    let today = new Date;
  }


  get f(): any {
    return this.mForm.controls
  }

 saveTickets() {
      // aquí función para enviar mail a Jesús y confirmación a asistentes

    }
}
