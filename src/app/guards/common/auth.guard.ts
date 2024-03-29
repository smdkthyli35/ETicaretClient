import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from 'src/app/base/base.component';
import { AuthService, _isAuthenticated } from 'src/app/services/common/auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/ui/custom-toastr.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const jwtHelper = inject(JwtHelperService);
  const toastrService = inject(CustomToastrService);
  const spinner = inject(NgxSpinnerService);
  const authService = inject(AuthService);

  spinner.show(SpinnerType.BallAtom);

  // const token: string = localStorage.getItem("accessToken");
  // let expired: boolean;
  // try {
  //   expired = jwtHelper.isTokenExpired(token);
  // } catch (err) {
  //   expired = true;
  // }

  if (!_isAuthenticated) {
    router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    toastrService.message("Oturum açmanız gerekiyor", "Yetkisiz Erişim", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight
    });
    authService.identityCheck();
  }

  spinner.hide(SpinnerType.BallAtom);

  return true;
};
