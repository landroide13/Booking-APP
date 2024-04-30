import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

export const isAuthenticated: CanMatchFn = (route: Route, segments: UrlSegment[]):
                                          | Observable<boolean | UrlTree>
                                          | Promise<boolean | UrlTree>
                                          | boolean
                                          | UrlTree => {
                                            
  const router = inject(Router);
  
  return inject(AuthService).userIsAuthenticated.pipe(
          map((isAuthenticated) => isAuthenticated || router.createUrlTree(['auth']))
        );                                          
};
