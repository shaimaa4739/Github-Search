import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';


export const successInterceptor: HttpInterceptorFn = (req, next) => {
  const toastr = inject(ToastrService);

  return next(req).pipe( 
    map((event: any) => {
    if (event && event.status >= 200 && event.status < 300) {
      showToasterSuccess(toastr,'Request successful','Success');
    }
    return event;
  })
  );
};

export function showToasterSuccess( toastr: any,description: string, title: string){
  toastr.success(description, title);
}

