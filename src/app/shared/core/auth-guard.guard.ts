import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  let router= inject(Router);
  if(localStorage.getItem('etoken')!=null){
    return true;
  }
   router.navigate(['/login']);
  return false;
};
