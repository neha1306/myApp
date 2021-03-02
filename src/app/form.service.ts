import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'any'
})

export class FormService {

  constructor(private _http: HttpClient) { }
 
  register(data):Observable<any>{
    return this._http.post("https://reqres.in/api/register",data)
    .pipe(
      catchError(this.errorHandler)
      )
  }

  login(data):Observable<any>{
    return this._http.post("https://reqres.in/api/login",data)
    .pipe(
      catchError(this.errorHandler)
      )
  }

  list():Observable<any>{
    const params1=new HttpParams().set('page','2');
    return this._http.get("https://reqres.in/api/users",{params:params1})
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getOne(id:number){
    return this._http.get("https://reqres.in/api/users?id="+id)
    .pipe(
      catchError(this.errorHandler)
      )
  }

  create(data):Observable<any>{
    return this._http.post("https://reqres.in/api/users",data)
    .pipe(
      catchError(this.errorHandler)
      )
  }


 errorHandler(error:HttpErrorResponse){
 return throwError("Server Error");
 }
}


