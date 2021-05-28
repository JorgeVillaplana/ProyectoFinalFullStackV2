import { HttpClient } from '@angular/common/http';
import { Guide } from '../models/guide.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor(private httpClient: HttpClient) { }

  getGuides(): Observable<any> {
    const params = {}
    return this.httpClient.get(`${environment.apiUrl}/guides`, { params: params })
    .pipe(
      catchError(error => {
        return error;
      })
    );
  }

  saveGuide(guide: Guide): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}/guide`, guide)
      .pipe(
        catchError(error => {
          return error;
        })
      );
  }

  getGuide(id: string |null): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/guide/${id}`).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  updateGuide(guide: Guide): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}/guide/${guide._id}`, guide).pipe(
      catchError(error => {
        return error;
      })
    );
  }

  deleteGuide(id: string): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}/guide/${id}`)
    .pipe(
      catchError(error => {
        return error;
      })
    );
  }

}
