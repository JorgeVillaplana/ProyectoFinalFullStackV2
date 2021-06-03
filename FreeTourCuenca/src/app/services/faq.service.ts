import { HttpClient } from '@angular/common/http';
import { Faq } from '../models/faq.model';
import { Language } from '../models/language.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private httpClient: HttpClient) { }

  getFaqs(): Observable<any>{
    const params = {}
    return this.httpClient.get(`${environment.apiUrl}/faqs`, { params: params })
    .pipe(
      catchError(error => {
        return error;
      })
    );
  }

  getFaq(id: string | null): Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/faq/${id}`)
    .pipe(
      catchError(error=>{
        return error;
      })
    );
  }

  getFaqByLang(language: Language): Observable<any>{
    const lang = language._id
    return this.httpClient.get(`${environment.apiUrl}/faq-by-lang/${lang}`)
    .pipe(
      catchError(error=>{
        return error;
      })
    );
  }

  saveFaq(faq: Faq): Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/save-faq`, faq)
    .pipe(
      catchError(error=>{
        return error;
      })
    );
  }

  updateFaq(faq: Faq): Observable<any>{
    return this.httpClient.put(`${environment.apiUrl}/faq/${faq._id}`, faq)
    .pipe(
      catchError( error => {
        return error;
      })
    );
  }

  deleteFaq(faq: Faq): Observable<any>{
    return this.httpClient.delete(`${environment.apiUrl}/faq/${faq._id}`)
    .pipe(
      catchError( error => {
        return error;
      })
    );
  }
}
