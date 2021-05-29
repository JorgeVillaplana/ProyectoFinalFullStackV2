import { Injectable } from '@angular/core';
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedlangService {

  language: Language = {}

  constructor() { }
}
