import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {User} from './classes/user';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private _http: HttpClient) { }
  
  register(data):Observable<any>{
    return this._http.post("https://reqres.in/api/register",data);
  }

  login(data):Observable<any>{
    return this._http.post("https://reqres.in/api/login",data);
  }

  list():Observable<any>{
    // const params1=new HttpParams().set('page','2')
    return this._http.get("https://reqres.in/api/users/2",);
  }
}


