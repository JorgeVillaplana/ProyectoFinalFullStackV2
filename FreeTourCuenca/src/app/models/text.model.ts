import { Language } from './language.model';

export class Text {
  texts?: [{
    code?: string;
    text?: string;
  }];
  language?: Language;
  _id?: string;
}
