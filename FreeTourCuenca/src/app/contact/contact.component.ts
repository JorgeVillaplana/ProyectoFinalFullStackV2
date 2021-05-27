import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  cForm: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router) {

      this.cForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      message: ["", Validators.required],

    })
  }

  get c(): any {
    return this.cForm.controls
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
  }

}
