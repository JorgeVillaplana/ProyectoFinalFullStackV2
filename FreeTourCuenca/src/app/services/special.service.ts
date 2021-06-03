import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Special } from '../models/special.model'
import { Language } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialService {

  constructor( private httpClient: HttpClient ) { }

  getSpecials(): Observable<any> {
    const params = {}
    return this.httpClient
      .get(
        `${environment.apiUrl}/specials`,
         { params: params}
      )
      .pipe(
        catchError( error => {
          return error;
        })
      )
  }

  getSpecial(id: string | null): Observable<any> {
    return this.httpClient
    .get(
      `${environment.apiUrl}/special/${id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  getSpecialByLang(language: Language): Observable<any> {
    return this.httpClient
    .get(`${environment.apiUrl}/special-by-lang/${language._id}`)
      .pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  saveSpecial(special: Special): Observable<any> {
    return this.httpClient
    .post(
      `${environment.apiUrl}/save-special/`,
      special
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  updateSpecial(special: Special): Observable<any> {
    return this.httpClient
    .put(
      `${environment.apiUrl}/text/${special._id}`,
      special
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  deleteSpecial(id: string | null): Observable<any> {
    return this.httpClient
    .delete(
      `${environment.apiUrl}/special/${id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }
}
