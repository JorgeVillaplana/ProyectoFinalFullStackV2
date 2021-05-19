import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-maker',
  templateUrl: './tour-maker.component.html',
  styleUrls: ['./tour-maker.component.scss']
})
export class TourMakerComponent implements OnInit {

  constructor() { }

  languages = [{
    _id: 'kjhgv',
    code: 'en',
    name: 'English',
  }]

  ngOnInit(): void {
  }

}
