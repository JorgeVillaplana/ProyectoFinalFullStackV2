import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Language } from './models/language.model';
import { LanguageService } from './services/language.service';
import { SelectedlangService } from './services/selectedlang.service';
import { Text } from './models/text.model';
import { TextsService } from './services/texts.service';
import { SelectedtextService } from './services/selectedtext.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explora Toledo';

  languages: Array<Language> = [];
  selectedLanguage: Language = {};
  text: Text = {};

  constructor(private router: Router,
    private languageService: LanguageService,
    private textsService: TextsService,
    private selLangService: SelectedlangService,
    private selTextService: SelectedtextService) {

      if( !this.selectedLanguage ){
        this.languages.forEach( lang => {
          if(lang.code === "es"){
            this.selectedLanguage = lang;
          }
        })
      }

    }

  showMenuAndFooter() {
    if(this.router.url === "/login" || this.router.url === "/register" || this.router.url.includes("/dashboard")){
      return false
    }else return true
  }

  loadLanguages() {
    this.languageService.getLanguages().subscribe(
      (data: Language[]) =>{
      this.languages = data
      console.log(data)
    },
     error => {
      console.log("Error: ", error);
    }
    );
  }

  loadTexts() {
    this.textsService.getTextByLang(this.selectedLanguage).subscribe(
      (data: Text) =>{
      this.text = data
      console.log(data)
      this.selTextService.text = this.text
    },
     error => {
      console.log("Error: ", error);
    }
    );
  }

  selectLanguage(language: Language){
    if(!language){
      this.languages.forEach( lang => {
        if(lang.code === "es"){
          language = lang;
        }
      })
    }
    this.selectedLanguage = language;
    this.selLangService.language = this.selectedLanguage;
  }

}
