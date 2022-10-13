import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokeInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authService = this.injector.get(AuthenticationService)
      const tokenizedReq = req.clone({
        headers:
        req.headers.set(
          'Authorization', 'Bearer '+ authService.getToken())
        
      })
      return next.handle(tokenizedReq)
  
      
  }
}
