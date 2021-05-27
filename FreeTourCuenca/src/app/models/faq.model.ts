import { Language } from "./language.model";

export class Guide {
  details?: [{
    question?: string;
    answer?: string;
  }];
  language?: Language;
  _id?: string;
}
