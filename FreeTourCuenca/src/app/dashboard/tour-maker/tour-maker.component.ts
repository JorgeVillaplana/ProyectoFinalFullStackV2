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
        tourname: ["", Validators.required, Validators.minLength(3)],
        language: [1, Validators.required],
        title: ["", Validators.required, Validators.minLength(8)],
        categories: ["", Validators.required],
        text: ["", Validators.required],
        duration: ["", Validators.required, Validators.minLength(2), Validators.maxLength(3)],
        route: ["", Validators.required],
        detail: ["", Validators.required],
        seats: [9, Validators.required],
        dates: ["", Validators.required],
        hours: ["", Validators.required],
        map: ["", Validators.required],
        guides: ["", Validators.required],
        guide: ["", Validators.required],
      })
    }

  languages: Array<Language> = []
  guides: Array<Guide> = []
  guideNames: string[] = []
  selGuides: Array<Guide> = []
  dates: string[] = []
  hours: string[] = []
  images: Image[] = []
  specials: Array<Special> = []
  specialFeatures = []
  tourdates = [{}]


  get m(): any {
    return this.mForm.controls
  }

  categories: string[] = []
  newCategory = ""

  addCategory(value: string) {
    this.categories.push(value);
    this.newCategory = "";
  }

  addDate(date: string) {
    this.dates.push(date)
  }

  addTime(hour: string) {
    this.hours.push(hour)
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
        return {
          day: d,
          timePicker: this.hours.map(
            hour => {
              return {
                hour: hour,
                remainingSeats: this.m.seats.value
              }
            }
          )
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
    const tour: Tour = new Tour()

    tour.name = this.m.name.value
    tour.duration = this.m.duration.value
    tour.seats = this.m.seats.value
    tour.tourDetails = [{
      language: this.languages[this.m.language.value],
      title: this.m.title.value,
      categories: this.categories,
      description: this.m.description.value,
      guides: this.selGuides,
      tourdates: this.tourdates,
    }]
    tour.images = this.images
    tour.map
    tour.specialFeatures = this.specialFeatures

    return tour
  }

  alert: boolean = false
  saveTour(){
      this.alert = true
      this.tourService.saveTour(this.readTour()).subscribe(
        data => {
          console.log(data)
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

  editTour(){
    // + CARGA LOS DATOS DE API
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

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadLanguages()
    this.loadGuides()
    this.loadTours()
  }
}
