import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../pages/service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
 const authService = inject(AuthService);
   const  router = inject(Router);
  
    
      if (!authService.isLoggedIn) {  // ✅ Redirect only if NOT logged in
        
        return router.createUrlTree(['/login']);
      }else{
         return true;
}
};
