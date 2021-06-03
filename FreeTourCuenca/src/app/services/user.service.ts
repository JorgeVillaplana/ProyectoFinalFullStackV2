import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User) {
    console.log
    return this.httpClient.post(`${environment.apiUrl}/login`, user).pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  }

  getUsers(): Observable<any> {
    const params = {}
    return this.httpClient
    .get(`${environment.apiUrl}/users`, {params: params})
    .pipe(
      catchError( error => {
        return error;
      })
    )
  }

  getUser(id: string | null): Observable<any> {
    return this.httpClient
    .get(`${environment.apiUrl}/user/${id}`)
    .pipe(
      catchError( error => {
        return error;
      })
    )
  }

  saveUser(user: User): Observable<any> {
    return this.httpClient
    .post(`${environment.apiUrl}/save-user`, user)
    .pipe(
      catchError( error => {
        return error
      })
    )
  }

  updateUser( user: User): Observable<any> {
    console.log(user)
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.httpClient
    .put(`${environment.apiUrl}/user/${user._id}`, user, { headers: reqHeader })
    .pipe(
      catchError ( error => {
        return error
      })
    )
  }

  deleteUser(id: string | null): Observable<any> {
    return this.httpClient
    .delete(`${environment.apiUrl}/user/${id}`)
    .pipe(
      catchError( error => {
        return error;
      })
    )
  }

}
