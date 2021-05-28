import { Language } from "./language.model";

export class Faq {
  details?: [{
    question?: string;
    answer?: string;
  }];
  language?: Language;
  _id?: string;
}
