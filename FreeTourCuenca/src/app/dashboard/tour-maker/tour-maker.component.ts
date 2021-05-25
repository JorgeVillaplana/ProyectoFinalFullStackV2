import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tour-maker',
  templateUrl: './tour-maker.component.html',
  styleUrls: ['./tour-maker.component.scss']
})
export class TourMakerComponent implements OnInit {

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
  languages = [
    {
      _id: 'tiruri',
      code: 'en',
      name: 'Español',
    },
    {
    _id: 'kjhgv',
    code: 'en',
    name: 'English',
  }]

  ngOnInit(): void {
  }

  get f(): any {
    return this.mForm.controls
  }

  postTour(){

  }
}
