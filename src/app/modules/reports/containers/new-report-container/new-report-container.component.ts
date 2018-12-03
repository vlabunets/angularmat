import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mat-new-report-container',
  templateUrl: './new-report-container.component.html',
  styleUrls: ['./new-report-container.component.scss']
})
export class NewReportContainerComponent implements OnInit {
  title = 'Загрузка документов';
  reportStatus = 'сформирован';

  constructor() { }

  ngOnInit() {
  }

}
