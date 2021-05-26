import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Language } from './models/language.model';
import { LanguageService } from './services/language.service';
import { Text } from './models/text.model';
import { TextsService } from './services/texts.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Explora Toledo';

  languages: Array<Language> = [];
  texts: Array<Text> = [];

  constructor(private router: Router, private activeRoute: ActivatedRoute,
    private languageService: LanguageService,
    private textsService: TextsService) { }

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
    this.textsService.getTexts().subscribe(
      (data: Text[]) =>{
      this.texts = data
      console.log(data)
    },
     error => {
      console.log("Error: ", error);
    }
    );
  }


}
