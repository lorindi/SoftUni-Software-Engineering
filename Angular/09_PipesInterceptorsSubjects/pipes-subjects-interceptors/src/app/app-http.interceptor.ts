import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { EMPTY, Observable, catchError, tap } from 'rxjs';
import { API_URL } from './constants';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', API_URL),
      });
    }

    return next.handle(request).pipe(
      tap((req) => {
        if (req instanceof HttpRequest) {
          // console.log(req);
        }
      }),
      catchError((err) => {
        if (err.status === 0) {
          console.error('Error from Interceptor', err);
          return EMPTY;
        }

        return [err];
      })
    );
  }
}

export const appHttpInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AppHttpInterceptor,
};
