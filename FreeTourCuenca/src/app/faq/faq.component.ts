import { Component, OnInit } from '@angular/core';
import { Faq } from '../models/faq.model'
import { Language } from '../models/language.model'
import { Text } from '../models/text.model'
import { FaqService } from './../services/faq.service';
import { SelectedlangService } from '../services/selectedlang.service';
import { SelectedtextService } from '../services/selectedtext.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  faq: Faq = {}
  selectedLang: Language = {}
  selectedText: Text = {}

  constructor(
    private faqService: FaqService,
    private selLangService: SelectedlangService,
    private selTextService: SelectedtextService,
  ) { }

  ngOnInit(): void {
    console.log(this.selLangService.language)
    this.selectedLang = this.selLangService.language
    this.selectedText = this.selTextService.text
    this.loadFaq()
  }

  loadFaq() {
    this.faqService.getFaqs().subscribe(
      (data: Faq[]) => {
        this.faq = data[0]
      },
      error => {
        console.log("Error: ", error)
      }
    )
  }
}

