import { FormService } from './form.service';
import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {


  constructor(private injector: Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    let formService = this.injector.get(FormService)

    let tokenizedReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${formService.getToken()}`
      }
    })
    
    
    return next.handle(tokenizedReq);
  }
}

