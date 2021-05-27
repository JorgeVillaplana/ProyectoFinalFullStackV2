import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  guides = [{
    _id: "aisduhfg",
    name: "Federico",
    surname: "Manoplez"
  }]

gForm: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router) {

    this.gForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
    })
  }

  get g(): any {
    return this.gForm.controls
  }


  guideForm = false
  addGuide() {
    this.guideForm = !this.guideForm
  }

  saveGuide(){}

  editGuide(id: any){

  }

  deleteGuide(id: any){}

  ngOnInit() {
    window.scrollTo(0,0);
  }
}
