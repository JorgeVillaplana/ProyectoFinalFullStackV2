import { Language } from './language.model';

export class PostDetail {
  title?: string;
  text?: string;
  language?: Language;
  categories?: Array<string>;
  _id?: string;
}
