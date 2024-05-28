import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastrService: ToastrService) { }

  showSuccess(alert: string) {
    this.toastrService.success(alert, 'Success');
  }
  showError(error: string) {
    this.toastrService.error(error, 'Error');
  }


}
