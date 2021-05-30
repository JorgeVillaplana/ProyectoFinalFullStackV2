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

  constructor(private fb: FormBuilder,
    private router: Router,
    private guideService: GuideService
    ) {

    this.gForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
    })
  }

  get g(): any {
    return this.gForm.controls
  }

  addGuide() {
    this.guideForm = !this.guideForm
  }

  editMode(){
    this.isEdit = !this.isEdit
  }

  submitForm(){
    if(this.isEdit){
      this.editGuide()
    } else{
      this.saveGuide()
    }
  }

  saveGuide(){
    this.guideService.saveGuide(this.readGuide()).subscribe(data => {
      console.log(data)
    },
    error => {
      console.log("Error: ", error)
    })
  }

  readGuide(): Guide {
    const guide: Guide = new Guide()

    if (this.isEdit) guide._id
    guide.name
    guide.surname
    guide.dni
    guide.phone
    guide.email
    guide.languages
    guide.locations

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
}
