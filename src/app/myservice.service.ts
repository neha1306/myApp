import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MyserviceService {

  constructor(private http: HttpClient) { }
  // MessageAlert(){
  //   alert("Hello");
  // }
  // product={name:"Mobile" , id:"001"};


  //   showTodayDate(){
  //     let ndate=new Date();
  //     return ndate;
  //   }


  product(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
}
