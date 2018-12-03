import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from './reports.component';
import {NewReportContainerComponent} from './containers/new-report-container/new-report-container.component';

const routes: Routes = [{
  path: '',
  component: NewReportContainerComponent,
  children: [
    {path: 'new-report', component: NewReportContainerComponent},
  ]
}];
export const reportsRoutes = RouterModule.forChild(routes);
