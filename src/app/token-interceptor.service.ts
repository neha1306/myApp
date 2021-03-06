import { FormService } from './form.service';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    console.log(req.url);
    let formService=this.injector.get(FormService)
    // const storageUser = localStorage.getItem('LoggedUser');
    let tokenizedReq=req.clone({
      setHeaders:{
        Authorization:`Bearer ${formService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
