import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors, withXsrfConfiguration } from '@angular/common/http';
import { xsrfTokenInterceptor } from './interceptor/token/xsrf-token-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',     
        headerName: 'X-XSRF-TOKEN'
      }),withInterceptors([xsrfTokenInterceptor])),
    provideRouter(routes)
  ]
};
