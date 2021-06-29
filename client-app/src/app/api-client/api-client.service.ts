import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


const prefix = '/api/';

export const API_URI_ARTICLES: string = prefix + 'articles';
export const API_URI_ARTICLE: string = prefix + 'articles/:id';

@Injectable()
export class ApiClientService {

  constructor(private http: HttpClient) { }

  private handleError(error: any, caught: Observable<any>): Observable<any> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = error;
    }
    return throwError(errorMessage);
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }



  /**
   * Methode get()
   * @param path path
   */
  get(path: string): Observable<any> {
    return this.http.get(path).pipe(map(this.extractData));
  }

  /**
   * Methode post()
   * @param path path
   * @param payload payload
   */
  post(path: string, payload: any): Observable<any> {
    return this.http.post<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Methode delete()
   * @param path path
   */
  delete(path: string): Observable<any> {
    return this.http.delete<any>(path).pipe(
      catchError(this.handleError)
    );
  }

  /**
   * Methode put()
   * @param path path
   * @param payload payload
   */
  put(path: string, payload: any): Observable<any> {
    return this.http.put<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }
  /**
   * Methode put()
   * @param path path
   * @param payload payload
   */
  patch(path: string, payload: any): Observable<any> {
    return this.http.patch<any>(path, payload).pipe(
      catchError(this.handleError)
    );
  }

}
