import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) {}

  showMessage(error?) {
    if (error) {
      const errors = error.message || [];
      this.toastr.error('', errors);
    } else {
      this.toastr.success('Success!');
    }
  }
}
