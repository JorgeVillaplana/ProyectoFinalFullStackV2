import { Component, OnInit, Input } from '@angular/core';
import { Text } from '../models/text.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() text: Text = {};

  constructor() { }

  ngOnInit(): void {
  }

}
