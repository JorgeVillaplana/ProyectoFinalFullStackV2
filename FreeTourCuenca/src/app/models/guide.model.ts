export class Guide {
  name?: string;
  surname?: string;
  dni?: string;
  phone?: string;
  email?: string;
  languages?: Array<string>;
  locations?: [{
    city?: string;
    state?: string;
    country?: string;
  }]
  _id?: string;
}
