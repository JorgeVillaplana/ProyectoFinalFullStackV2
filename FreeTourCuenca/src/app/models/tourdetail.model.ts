import { Guide } from "./guide.model";
import { Language } from "./language.model";

export class TourDetail {
  language?: Language;
  title?: string;
  categories?: Array<string>;
  description?: string;
  guides?: Array<Guide>;
  tourdates?: {
    day?: Date;
    timePicker?: {
      hour?: string;
      remainingSeats: number;
    }[];
  }[];
  _id?: string;
}
