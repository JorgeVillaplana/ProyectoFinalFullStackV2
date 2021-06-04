import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Tour } from '../models/tour.model';
import { Language } from '../models/language.model';


@Injectable({
  providedIn: 'root'
})
export class ToursService {

  constructor( private httpClient: HttpClient ) { }

  getTours(): Observable<any> {
    const params = {}
    return this.httpClient
      .get(
        `${environment.apiUrl}/tours`,
         { params: params}
      )
      .pipe(
        catchError( error => {
          return error;
        })
      )
  }

  getTour(id: string | null): Observable<any> {
    return this.httpClient
    .get(
      `${environment.apiUrl}/tour/${id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  getTourByName(tour: Tour): Observable<any> {
    return this.httpClient
    .get(
      `${environment.apiUrl}/tour-name/${tour.name}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  getTourByLang(lang: Language): Observable<any> {
    return this.httpClient
    .get(
      `${environment.apiUrl}/tour-by-lang/${lang._id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  saveTour(tour: Tour): Observable<any> {
    return this.httpClient
    .post(
      `${environment.apiUrl}/save-tour/`,
      tour
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  updateTour( tour: Tour ): Observable<any> {
    return this.httpClient
    .put(
      `${environment.apiUrl}/tour/${tour._id}`,
      tour
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  deleteTour(id: string | null): Observable<any> {
    return this.httpClient
    .delete(
      `${environment.apiUrl}/tour/${id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }
}
