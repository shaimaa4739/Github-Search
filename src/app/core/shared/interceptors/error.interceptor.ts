import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    catchError((error) => {
      switch (error.status) {
        case 400:
          showToasterError(toastr,'Error', 'Bad Request', );
          break;
        case 401:
          showToasterError(toastr,'Error', 'Unauthorized');
          break;
        case 403:
          showToasterError(toastr,'Error', 'Forbidden');
          break;
        case 404:
          showToasterError(toastr,'Not Found:', error.message);
          break;
        case 500:
          showToasterError(toastr,'Error', 'Internal Server Error');
          break;
        default:
          showToasterError(toastr,'Error', 'Unexpected Error');
          break;
      }
      return throwError(() => new Error(error.message));
    })
  );
};

export function showToasterError(toastr: any,title: string, description: string){
  toastr.error(description, title);
}

