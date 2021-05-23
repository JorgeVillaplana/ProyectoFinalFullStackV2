import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor( private httpClient: HttpClient ) { }

  getPosts(): Observable<any> {
    const params = {}
    return this.httpClient
      .get(
        `${environment.apiUrl}/posts`,
         { params: params}
      )
      .pipe(
        catchError( error => {
          return error;
        })
      )
  }

  getPost(id: string | null): Observable<any> {
    return this.httpClient
    .get(
      `${environment.apiUrl}/post/${id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  getPostByCode(code: string | null): Observable<any> {
    return this.httpClient
    .get(
      `${environment.apiUrl}/postc/${code}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  savePost(post: Post): Observable<any> {
    return this.httpClient
    .post(
      `${environment.apiUrl}/save-post/`,
      post
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  updatePost( post: Post ): Observable<any> {
    return this.httpClient
    .put(
      `${environment.apiUrl}/post/${post._id}`,
      post
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }

  deletePost(id: string | null): Observable<any> {
    return this.httpClient
    .delete(
      `${environment.apiUrl}/post/${id}`
    ).pipe(
      catchError ( error => {
        return error;
      })
    )
  }
}
