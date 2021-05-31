import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Language } from '../../models/language.model';
import { LanguageService } from '../../services/language.service';
import { Text } from '../../models/text.model';
import { TextsService } from '../../services/texts.service';



@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {

  languageForm: FormGroup;
  textForm: FormGroup;
  languages: Language[] = [];
  texts: Text[] = [];


  constructor(private fb: FormBuilder,
    private router: Router,
    private languageService: LanguageService,
    private textService: TextsService) {
      this.languageForm = this.fb.group({
        name: ["", Validators.required],
        code: ["", Validators.required],
        icon: [""]
      })

      this.textForm = this.fb.group({
        code: ["", Validators.required],
        text: ["", Validators.required],
        language: ["", Validators.required]
      })

    }

    get l(): any {
      return this.languageForm.controls
    }

    get t(): any {
      return this.textForm.controls
    }

    readLanguage():Language {
      const lang: Language = new Language()

      lang.code = this.l.code.value
      lang.name = this.l.name.value
      lang.icon = this.l.icon.value

      return lang
    }

    saveLanguage(){
      this.languageService.saveLanguage(this.readLanguage()).subscribe(
        data =>{
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
    }

    loadLanguages(){
      this.languageService.getLanguages().subscribe(
        (data: Language[]) => {
          this.languages = data
          console.log(data)
        },
        error => {
          console.log(error)
        }
      )
    }

    ngOnInit() {
      window.scrollTo(0,0);
    }

}
