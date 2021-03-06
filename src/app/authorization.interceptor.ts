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
    const token: string = localStorage.getItem('token');

    if (token) {
      request = request.clone({
        headers: request.headers.set
          ('Authorization', 'Bearer ' + token)
      });
    }

    return next.handle(request);
  }
}

