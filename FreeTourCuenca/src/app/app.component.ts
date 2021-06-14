import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Language } from './models/language.model';
import { LanguageService } from './services/language.service';
import { SelectedlangService } from './services/selectedlang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explora Toledo';

  languages: Array<Language> = [];
  selectedLanguage: Language = {};

  constructor(private router: Router,
    private languageService: LanguageService,
    private selLangService: SelectedlangService) {

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

  selectLanguage(language: Language | undefined){
    if(!language){
      this.languages.forEach( lang => {
        if(lang.code == "es"){
          console.log(lang)
          language = lang;
        }
      })
    }else{
      this.selectedLanguage = language;
    }
    this.selLangService.language = this.selectedLanguage;
  }

}
