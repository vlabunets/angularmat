import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {InputComponent} from './input/input.component';
import {DateInputComponent} from './date-input/date-input.component';

@NgModule({
  declarations: [
    InputComponent,
    DateInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    MatInputModule,
    MatDatepickerModule,
    InputComponent,
    DateInputComponent,
  ]
})
export class FormElementsModule {
}
