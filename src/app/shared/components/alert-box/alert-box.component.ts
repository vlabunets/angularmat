import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'mat-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.scss']
})
export class AlertBoxComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Input() text: string;
  alertType;

  constructor() {
  }

  ngOnInit() {
    this.choseType(this.type);
  }

  choseType(type) {
    switch (type) {
      case 'success':
        this.alertType = type;
        break;
      case 'info':
        this.alertType = type;
        break;
      case 'warning':
        this.alertType = type;
        break;
      case 'error':
        this.alertType = type;
        break;
      default:
        this.alertType = type;
    }
  }
}
