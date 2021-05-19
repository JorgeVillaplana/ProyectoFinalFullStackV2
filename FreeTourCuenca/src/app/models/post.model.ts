import { Image } from './image.model';
import { Language } from './language.model';

export class Post {
  code?: string;
  title?: string;
  text?: string;
  image?: Image;
  important?: boolean;
  categories?: Array<any>;
  language?: Language;
  _id?: string;
}
