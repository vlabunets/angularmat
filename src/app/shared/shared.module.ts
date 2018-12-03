import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {FormElementsModule} from './modules/form-elemnts/form-elements.module';
import {AlertBoxComponent} from './components/alert-box/alert-box.component';

@NgModule({
  declarations: [AlertBoxComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormElementsModule,
  ],
  exports: [
    AlertBoxComponent,
    MatButtonModule,
    MatChipsModule,
    FormElementsModule,
  ]
})
export class SharedModule {
}
