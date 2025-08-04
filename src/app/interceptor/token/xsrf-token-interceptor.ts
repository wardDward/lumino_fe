import { HttpInterceptorFn, HttpXsrfTokenExtractor } from '@angular/common/http';
import { inject } from '@angular/core';

export const xsrfTokenInterceptor: HttpInterceptorFn = (req, next) => {
   const extractor = inject(HttpXsrfTokenExtractor);
  const token = extractor.getToken();
  const headerName = 'X-XSRF-TOKEN';

  if (req.method === 'GET' || req.method === 'HEAD') return next(req);
  if (token && !req.headers.has(headerName)) {
    req = req.clone({ setHeaders: { [headerName]: token } });
  }
  return next(req);
};
