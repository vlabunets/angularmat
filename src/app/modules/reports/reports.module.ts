import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {reportsRoutes} from './reports.routes';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

import {SharedModule} from '../../shared/shared.module';

import {ReportsComponent} from './reports.component';
import {NewReportContainerComponent} from './containers/new-report-container/new-report-container.component';
import {NewReportComponent} from './components/new-report/new-report.component';
import {TransportInfoComponent} from './components/transport-info/transport-info.component';

@NgModule({
  declarations: [
    ReportsComponent,
    NewReportContainerComponent,
    NewReportComponent,
    TransportInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    reportsRoutes,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatExpansionModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [

  ]
})
export class ReportsModule {
}
