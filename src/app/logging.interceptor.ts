import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("Auth Interceptor provider");
    console.log(request.url);
    const authToken="My Auth Token";
    const authReq=request.clone({
      setHeaders:{Authorization:authToken}
    });
    return next.handle(authReq);
  }
}
