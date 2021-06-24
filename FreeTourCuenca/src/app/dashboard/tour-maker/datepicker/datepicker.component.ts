import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  @Input() oldDates: Array<Date> = [];
  @Output() newItemEvent = new EventEmitter<Date[]>();

  dates: Array<Date> = []

  startDate: string = "";
  endDate: string = "";

  frecuency = "Daily";

  weekDays = [
    {
      day: 'Sunday',
      checked: false
    },
    {
      day: 'Monday',
      checked: false
    },
    {
      day: 'Tuesday',
      checked: false
    },
    {
      day: 'Wednesday',
      checked: false
    },
    {
      day: 'Thursday',
      checked: false
    },
    {
      day: 'Friday',
      checked: false
    },
    {
      day: 'Saturday',
      checked: false
    }
  ];

  daysOnAMonth: Array<any> = []

  errorStartDate: boolean = false
  errorEndDate: boolean = false

  constructor() {}

  ngOnInit() {
    this.makeDaysOnAMonth();
    this.dates = this.oldDates
  }

  makeDaysOnAMonth() {
    const arry=[]
    for (let i = 0; i <= 30; i++) {
      const pat = {
        day: i+1,
        checked: false
      }
      arry.push(pat)
    }
    this.daysOnAMonth = arry
  }

  changeFrecuency(newValue: string) {
    this.frecuency = newValue;
  }

  getDatesBetweenRange(){
    this.startDate ? this.errorStartDate = false : this.errorStartDate = true;
    this.endDate ? this.errorEndDate = false : this.errorEndDate = true;

    let rangeStart = new Date(this.startDate)
    let rangeEnd = new Date(this.endDate)

    let dates = [],
    currentDate = rangeStart,
    addDays = function(this: any, days: number) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    if( this.frecuency == "Daily" ){
      while (currentDate <= rangeEnd) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
      }
    }
    if( this.frecuency == "Weekly" ){
      while (currentDate <= rangeEnd) {
        if(this.weekDays[currentDate.getDay()].checked){
          dates.push(currentDate);
        }
        currentDate = addDays.call(currentDate, 1);
      }
    }

    if( this.frecuency == "Monthly" ){
      while (currentDate <= rangeEnd) {
        if(this.daysOnAMonth[currentDate.getDate()-1].checked){
          dates.push(currentDate);
        }
        currentDate = addDays.call(currentDate, 1);
      }
    }

    return dates

  }

  setDates() {
    this.dates = this.getDatesBetweenRange()
    this.newItemEvent.emit(this.dates)
  }
}
