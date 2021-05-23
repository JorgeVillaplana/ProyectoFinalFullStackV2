import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  languageForm: FormGroup;
  textForm: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router) {
      this.languageForm = this.fb.group({
        name: ["", Validators.required],
        code: ["", Validators.required]
      })

      this.textForm = this.fb.group({
        code: ["", Validators.required],
        text: ["", Validators.required],
        language: ["", Validators.required]
      })
    }

  ngOnInit() {
  }

}
