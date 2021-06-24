import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tour } from '../../models/tour.model'
import { TourDetail } from '../../models/tourdetail.model'
import { Image } from '../../models/image.model'
import { Language } from '../../models/language.model'
import { Guide } from '../../models/guide.model'
import { Special } from '../../models/special.model'
import { LanguageService } from 'src/app/services/language.service';
import { GuideService } from 'src/app/services/guide.service';
import { ToursService } from 'src/app/services/tours.service';
import { SpecialService } from 'src/app/services/special.service';
import * as moment from 'moment';

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
  languages: Array<Language> = []
  guides: Array<Guide> = []
  guideNames: string[] = []
  selGuides: Array<Guide> = []
  dates: Array<Date> = []
  mhours: string[] = []
  ehours: string[] = []
  images: Image[] = []
  specials: Array<Special> = []
  specialFeatures = []
  tourdates = [{}]
  categories: string[] = []
  newCategory = ""

  constructor(private fb: FormBuilder,
    private router: Router,
    private langService: LanguageService,
    private guideService: GuideService,
    private tourService: ToursService,
    private specialService: SpecialService) {
      this.mForm = this.fb.group({
        tourname: ["", Validators.required],
        language: [1, Validators.required],
        title: ["", Validators.required],
        categories: ['FreeTour'],
        text: ["", Validators.required],
        duration: ["", Validators.required],
        route: [""],
        detail: [""],
        seats: [25, Validators.required],
        dates: ["", Validators.required],
        mhours: ["", Validators.required],
        ehours: ["", Validators.required],
        map: ["", Validators.required],
        guides: [""]
      })
    }

  get m(): any {
    return this.mForm.controls
  }

  addCategory(value: string) {
    this.categories.push(value);
    this.newCategory = "";
  }

  addMTime(mhour: string) {
    this.mhours.push(mhour)
  }

  addETime(ehour: string) {
    this.ehours.push(ehour)
  }

  addGuide(guidePos: string) {
    const guidePosition: number = +guidePos
    if(this.guides[guidePosition] && this.guides[guidePosition].name){
      this.guideNames.push(this.guides[guidePosition].name!)
    }
  }

  addTourdate(){
    const tourdate = this.dates.map(
      d =>{
        if(d.getDay() == 0 || d.getDay() == 6){
          return {
            day: moment(moment(d).toISOString()).toDate(),
            timePicker: this.ehours.map(
              hour => {
                return {
                  hour: hour,
                  remainingSeats: this.m.seats.value
                }
              }
            )
          }
        }else{
          return {
            day: moment(moment(d).toISOString()).toDate(),
            timePicker: this.mhours.map(
              hour => {
                return {
                  hour: hour,
                  remainingSeats: this.m.seats.value
                }
              }
            )
          }
        }
      }
    )
    return tourdate
  }

  showForm = true
  showNewTour(){
    this.showForm = !this.showForm
    // DESPLIEGA FORMULARIO VACÍO
  }

  readTour(): Tour {
    this.tourdates.push(this.addTourdate())
    const tour: Tour = new Tour()

    tour.name = this.m.tourname.value
    tour.duration = this.m.duration.value
    tour.seats = this.m.seats.value
    tour.tourDetails = [{
      language: this.languages[this.m.language.value],
      title: this.m.title.value,
      categories: this.categories,
      description: this.m.text.value,
      guides: this.selGuides,
      tourdates: this.tourdates,
    }]
    tour.images = this.images
    tour.map = this.m.map.value
    tour.specialFeatures = [{
      special: undefined,
      value: false
    }]

    return tour
  }

  alert: boolean = false
  saveTour(){
      this.tourService.saveTour(this.readTour()).subscribe(
        data => {
          console.log(data)
          this.alert = true
          this.loadTours()
        },
        error => {
          console.log("Error: ", error)
        }
      )
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

  updateTour(tour: Tour){
      if(tour){
        this.tourService.updateTour(tour).subscribe(
          data => {
            console.log(data)
            this.loadTours()
          },
          error => {
            console.log(error)
          }
        )
      }
  }

  deleteTour(id: string | undefined){
    if(id){
      this.tourService.deleteTour(id).subscribe(
        data => {
          console.log(data)
          this.loadTours()
        },
        error => {
          console.log(error)
        }
      )
    }
  }

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

  getDates(dateArray: Array<Date> | undefined){
    this.dates = dateArray!.map( date => { return date } )
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadLanguages()
    this.loadGuides()
    this.loadTours()
  }
}
