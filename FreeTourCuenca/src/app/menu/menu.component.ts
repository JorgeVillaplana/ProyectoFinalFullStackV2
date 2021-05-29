import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTripadvisor } from '@fortawesome/free-brands-svg-icons';
import { Language } from '../models/language.model';
import { Text } from '../models/text.model';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() languages: Array<Language> = [];
  @Input() text: Text = {};
  @Output() selectedLanguage = new EventEmitter<Language>();

  constructor() { }

  faFacebookSquare = faFacebookSquare;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faTripadvisor = faTripadvisor;

  showMenu() {
    // función mostrar menu
  }

  ngOnInit(): void {

  }

  selectLanguage(value: Language){
    this.selectedLanguage.emit(value);
  }


}
