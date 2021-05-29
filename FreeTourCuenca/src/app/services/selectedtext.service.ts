import { Injectable } from '@angular/core';
import { Text } from '../models/text.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedtextService {

  text: Text = {}

  constructor() { }
}
