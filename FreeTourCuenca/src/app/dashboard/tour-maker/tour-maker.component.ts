import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tour } from '../../models/tour.model'
import { TourDetail } from '../../models/tourdetail.model'
import { Language } from '../../models/language.model'
import { Guide } from '../../models/guide.model'
import { Special } from '../../models/special.model'
import { LanguageService } from 'src/app/services/language.service';
import { GuideService } from 'src/app/services/guide.service';
import { ToursService } from 'src/app/services/tours.service';
import { SpecialService } from 'src/app/services/special.service';

@Component({
  selector: 'app-tour-maker',
  templateUrl: './tour-maker.component.html',
  styleUrls: ['./tour-maker.component.scss']
})
export class TourMakerComponent implements OnInit {

  mForm: FormGroup
  froalaOptions: Object = {
    placeholder: 'Escribe aquí'
  }
  tours: Array<Tour> = []

  constructor(private fb: FormBuilder,
    private router: Router,
    private langService: LanguageService,
    private guideService: GuideService,
    private tourService: ToursService,
    private specialService: SpecialService) {
      this.mForm = this.fb.group({
        tourname: ["", Validators.required],
        language: [{code: 'es'}, Validators.required],
        title: ["", Validators.required],
        duration: [150, Validators.required, Validators.minLength(2), Validators.maxLength(3)],
        seats: [9, Validators.required],
        date: ["", Validators.required],
        time: ["", Validators.required],
      })
    }
  languages: Array<Language> = []
  guides: Array<Guide> = []
  selGuides: Array<Guide> = []
  dates = []
  hours = []
  images = []
  specials: Array<Special> = []
  specialFeatures = []
  tourdates = [{}]

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

  addTourdate(){
    const tourdate = this.dates.map(
      d =>{
        return {
          day: Date = d,
          timePicker: this.hours.map(
            hour => {
              return {
                hour: String = hour,
                remainingSeats: this.m.seats.value
              }
            }
          )
        }
      }
    )
    return tourdate
  }

  showForm = false
  showNewTour(){
    this.showForm = !this.showForm
    // DESPLIEGA FORMULARIO VACÍO
  }

/*
  readTour(): Tour {
    const tour: Tour = new Tour()

    tour.name = this.m.name.value
    tour.duration = this.m.duration.value
    tour.seats = this.m.seats.value
    tour.tourDetails = [{
      language: this.languages[this.m.language.value],
      title: this.m.title.value,
      categories: this.tags,
      description: this.m.description.value,
      guides: this.selGuides,
      tourdates: this.tourdates,
    }]
    tour.images = this.images
    tour.map
    tour.specialFeatures = this.specialFeatures

    return tour

  }
*/

  alert: boolean = false
  saveTour(){
      this.alert = true
  }

  loadTours() {
    this.tourService.getTours().subscribe(
      (data: Tour[]) => {
        this.tours = data
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  editTour(){
    // + CARGA LOS DATOS DE API
  }

  deleteTour(){}

  loadLanguages() {
    this.langService.getLanguages().subscribe(
      (data: Language[]) =>{
        this.languages = data
        console.log(data)
      },
      error => {
        console.log("Error: ", error);
      }
    );
  }

  loadGuides() {
    this.guideService.getGuides().subscribe(
      (data: Guide[]) => {
        this.guides = data
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  loadSpecial() {
    this.specialService.getSpecials().subscribe(
      (data: Special[]) => {
        this.specials = data
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadLanguages()
    this.loadGuides()
    this.loadTours()
  }
}
