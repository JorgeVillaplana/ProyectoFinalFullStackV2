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
        tourname: ["", Validators.required],
        language: ["", Validators.required],
        title: ["", Validators.required],
        duration: ["", Validators.required, Validators.minLength(2), Validators.maxLength(3)],
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

  get m(): any {
    return this.mForm.controls
  }

  tags = [] as any
  newTag = ""

  addTag(data: any) {
    this.tags.push(data);
    data.value = "";
  }

  newTime = ""
  addTime() {}

  newGuide = ""
  addGuide() {}

  showForm = false
  showNewTour(){
    this.showForm = !this.showForm
    // DESPLIEGA FORMULARIO VACÍO
  }

  saveTour(){
    // GUARDA TOUR
  }

  loadTours() {
    // CARGA LISTADO DE TOURS DESDE API
  }

  editTour(){
    // + CARGA LOS DATOS DE API
  }

  deleteTour(){}





  ngOnInit() {
    window.scrollTo(0,0);
  }
}
