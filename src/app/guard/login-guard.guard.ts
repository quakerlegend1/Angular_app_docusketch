import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';

export const loginGuardGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router)
  const auth = inject(AuthService);
  if(auth.isAuth){
    return true
  } else {
    router.navigate(["login"])
    return false
  }
  
};
