import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
  ]
})
export class CoreModule {
}
