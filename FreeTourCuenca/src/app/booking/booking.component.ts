import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,
    private router: Router) {

      this.mForm = this.fb.group({
        name: ["", Validators.required],
        email: ["", Validators.required, Validators.email],
        seats: ["", Validators.required, Validators.max(9)],
        date: ["", Validators.required],
        time: ["", Validators.required],
      })
    }


  ngOnInit() {
    let today = new Date;
  }


  get m(): any {
    return this.mForm.controls
  }

 saveTickets() {
      // aquí función para enviar mail a Jesús y confirmación a asistentes

    }
}
