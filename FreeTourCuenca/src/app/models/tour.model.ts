import { Image } from './image.model'
import{ Guide } from './guide.model'
export class Tour {
  code?: string;
  title?: string;
  description?: string;
  duration?: number;
  seats?: number;
  image?: Image;
  guide?: Guide;
  map?: string;
  language?: string;
  categories?: Array<any>;
  special?: Array<any>;
  tourdates?: Array<any>;
  _id?: string;
}
