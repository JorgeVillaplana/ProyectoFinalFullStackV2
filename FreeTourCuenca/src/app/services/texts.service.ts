import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Text } from '../models/text.model'

@Injectable({
  providedIn: 'root'
})
export class TextsService {

  constructor( private httpClient: HttpClient ) { }

  getTexts(): Observable<any> {
    const params = {}
    return this.httpClient
      .get(
        `$(environment.apiUrl)/texts`,
         { params: params}
      )
      .pipe(
        catchError( error => {
          return error;
        })
      )
  }

  getText(id: string | null): Observable<any> {
    return this.httpClient
    .get(
      `$(environment.apiUrl)/text/$(id)`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  getTextByCode(code: string | null): Observable<any> {
    return this.httpClient
    .get(
      `$(environment.apiUrl)/text/$(code)`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  saveText(text: Text): Observable<any> {
    return this.httpClient
    .post(
      `$(environment.apiUrl)/save-text/`,
      text
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  updateText( text: Text ): Observable<any> {
    return this.httpClient
    .put(
      `$(environment.apiUrl)/text/$(text._id)`,
      text
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  deleteText(id: string | null): Observable<any> {
    return this.httpClient
    .delete(
      `$(environment.apiUrl)/text/$(id)`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }
}
