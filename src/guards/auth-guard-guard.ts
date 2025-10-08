import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('username') !== null && localStorage.getItem('password') !== null)
    return true;
  else
  {
    let router = inject(Router);
    router.navigate(['/login'])
    return false
  }
};
