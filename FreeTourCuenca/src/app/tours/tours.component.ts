import { Component, OnInit } from '@angular/core';
import { faDog, faWheelchair } from '@fortawesome/free-solid-svg-icons';
import { Text } from '../models/text.model'
import { Language } from '../models/language.model'
import { Tour } from './../models/tour.model';
import { ToursService } from './../services/tours.service';
import { SelectedlangService } from '../services/selectedlang.service';
import { SelectedtextService } from '../services/selectedtext.service';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor(
    private toursService: ToursService,
    private selLangService: SelectedlangService,
    private selTextService: SelectedtextService
    ) { }

  faWheelchair = faWheelchair
  faDog = faDog

  tours: Array<Tour> = [];
  selectedLang: Language = {}
  selectedText: Text = {}

  ngOnInit(): void {
    this.selectedLang = this.selLangService.language
    this.selectedText = this.selTextService.text
    this.loadTours();
    window.scrollTo(0,0);

  }

  loadTours() {
    this.toursService.getTourByLang(this.selectedLang).subscribe(
      (data: Tour[]) => {
        this.tours = data
        console.log(data)
      },
      ( error: any) => {
        console.log("Error: ", error)
      }
    );
  }

}
