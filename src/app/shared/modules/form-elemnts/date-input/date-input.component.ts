import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'mat-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent {
  @Input() form: FormGroup;
  @Input() controlName: string;
  @Input() width?: string;
  @Input() fieldStyle?: string;
  @Input() hint?: string;
  @Input() label?: string;
  @Input() placeholder?: String = 'Choose a date';
  @Input() value?: string;
  @Input() fieldMarker?: string;

  stateClass: string;

  constructor() {
  }

  fieldWidth() {
    if (this.width === 'fullwidth') {
      return 'fullwidth';
    } else {
      return '';
    }
  }

  chooseStateClass() {
    switch (this.fieldMarker) {
      case 'primary':
        return this.stateClass = 'primary';
      case 'secondary':
        return this.stateClass = 'secondary';
      default:
        return this.stateClass = 'primary';
    }
  }

  fieldMarkerClass() {
    if (this.fieldStyle === 'outline' || this.fieldStyle === 'fill') {
      return 'high';
    } else {
      return '';
    }
  }
}
