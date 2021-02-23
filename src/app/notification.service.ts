import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { }

  showSuccess(message, title,timespan){
    this.toastr.success(message, title,{
      timeOut: timespan
    });
  }
  showError(message, title,timespan){
    this.toastr.error(message, title,{
      timeOut :  timespan
    })
}
}