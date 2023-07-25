import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../authService/auth.service';


export const loginGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  if(auth.isAuth){
    return true
  } else {
    return false
  }
  
};
