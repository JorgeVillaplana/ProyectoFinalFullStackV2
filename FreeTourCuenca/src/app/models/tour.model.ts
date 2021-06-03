import { Image } from './image.model'
import { Special } from './special.model';
import { TourDetail } from './tourdetail.model';
export class Tour {
  name?: string;
  duration?: number;
  seats?: number;
  tourDetails?: Array<TourDetail>;
  images?: Array<Image>;
  map?: string;
  specialFeatures?: {
    special?: Special;
    value?: boolean;
  }[];
  _id?: string;
}
