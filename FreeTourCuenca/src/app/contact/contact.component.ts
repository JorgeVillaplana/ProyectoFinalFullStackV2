import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SelectedtextService } from '../services/selectedtext.service';
import { SelectedlangService } from '../services/selectedlang.service';
import { Language } from '../models/language.model';
import { Text } from '../models/text.model'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  cForm: FormGroup
  selectedLang: Language = {}
  selectedText: Text = {}

  constructor(private fb: FormBuilder,
    private router: Router,
    private selLangService: SelectedlangService,
    private selTextService: SelectedtextService) {

      this.cForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      message: ["", Validators.required],

    })
  }

  get c(): any { //no sé para qué sirve esto realmente, está copiado de thepeople
    return this.cForm.controls
  }

  ngOnInit(): void {
    window.scrollTo(0,0);
    this.selectedLang = this.selLangService.language
    this.selectedText = this.selTextService.text
  }

}
