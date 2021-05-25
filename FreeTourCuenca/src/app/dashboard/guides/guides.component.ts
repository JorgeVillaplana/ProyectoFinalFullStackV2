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

  constructor() { }

  ngOnInit(): void {
  }

  editGuide(id: any){

  }

  deleteGuide(id: any){

  }

}
