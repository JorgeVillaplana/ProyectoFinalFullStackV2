import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour.model';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor( private httpClient: HttpClient ) { }

  sendConfirmation(object: any): Observable<any> {
    return this.httpClient
    .post(
      `${environment.apiUrl}/send-confirmation/`,
      object
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  sendToMe(object: any): Observable<any> {
    return this.httpClient
    .post(
      `${environment.apiUrl}/send-me/`,
      object
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }
}
