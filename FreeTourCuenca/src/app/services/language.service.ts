import { Language } from '../models/language.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private httpClient: HttpClient) { }

  getLanguages(): Observable<any> {
    const params = {}
    return this.httpClient.get(`${environment.apiUrl}/languages`, { params: params })
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }

  saveLanguage(language: Language): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/language`, language)
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }

  getLanguage(id: string |null): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/language/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  updateLanguage(language: Language): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/language/${language._id}`, language).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  deleteLanguage(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/language/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }
}
