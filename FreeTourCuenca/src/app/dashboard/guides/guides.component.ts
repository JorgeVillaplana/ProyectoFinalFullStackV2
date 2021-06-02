import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Guide } from '../../models/guide.model';
import { GuideService } from '../../services/guide.service'
@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  guides: Array<Guide> = []
  guideForm = false
  gForm: FormGroup
  isEdit = false
  guide: Guide = {}
  languages: string[] = []
  locations: Array<any> = [{}]

  constructor(private fb: FormBuilder,
    private router: Router,
    private guideService: GuideService
    ) {

    this.gForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      dni: ["", Validators.required, Validators.maxLength(9)],
      phone: ["", Validators.required, Validators.maxLength(9)],
    })
  }

  get g(): any {
    return this.gForm.controls
  }

  addGuide() {
    this.guideForm = !this.guideForm
  }

  editMode(guide: Guide){
    this.isEdit = !this.isEdit
    this.guide = guide
    this.addGuide()
    this.gForm.patchValue({
      name: guide.name,
      surname: guide.surname,
      dni: guide.dni,
      phone: guide.phone,
      email: guide.email,
      languages: guide.languages!.toString(),
      locations: guide.locations!.toString()
    })
  }

alert: boolean = false
  submitForm(){
    if(this.isEdit){
      this.editGuide()
    } else{
      this.saveGuide()
    }
    this.alert = true
  }

  saveGuide(){
    this.guideService.saveGuide(this.readGuide()).subscribe(data => {
      console.log(data)
    },
    error => {
      console.log("Error: ", error)
    })
    this.loadGuides()
  }

  readGuide(): Guide {
    const guide: Guide = new Guide()

    if (this.isEdit) guide._id = this.guide._id
    guide.name = this.g.name.value
    guide.surname = this.g.surname.value
    guide.dni = this.g.dni.value
    guide.phone = this.g.phone.value
    guide.email = this.g.email.value
    guide.languages = this.languages
    //guide.locations = this.locations

    console.log(guide)
    return guide
  }

  editGuide(){
    this.guideService.updateGuide(this.readGuide()).subscribe(data => {
      console.log(data)
    },
    error => {
      console.log("Error: ", error)
    })
  }

  deleteGuide(id: any){
    this.guideService.deleteGuide(id).subscribe(
      data => {
        console.log(data)
        this.loadGuides()
      },
      error => {
        console.log(error)
      }
    )
  }

  loadGuides(){
    this.guideService.getGuides().subscribe(
      (data: Guide[]) => {
        this.guides = data
        console.log(data)
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadGuides()
  }

  onEnter(value: string){
    this.languages.push(value)

  }

  newLocation(city: string, state: string, country: string){
    let location = {
      city: city,
      state: state,
      country: country
    }

    this.locations.push(location)
  }
}
