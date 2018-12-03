import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {ReportsService} from '../../services/reports.service';
import {ToasterService} from '../../../../core/services/toastr.service';

@Component({
  selector: 'mat-transport-info',
  templateUrl: './transport-info.component.html',
  styleUrls: ['./transport-info.component.scss']
})
export class TransportInfoComponent implements OnInit {
  form: FormGroup;
  containerIDs: FormArray;
  panelOpenState = true;
  panelTitle = 'Информация о перевозке';
  rtansporterTitle = 'Перевозчик';
  rtansporterTitleName = 'Перевозчик A';
  containers_title = 'Контейнеры';
  containers_number_title = 'Номер контейнера';
  containers_number_titleId = 'ИД';
  containers_number_value = '000000';


  constructor(private fb: FormBuilder,
              private reportService: ReportsService,
              private toaster: ToasterService) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      dateInput: [{value: '', disabled: false}],
      numberInput: [{value: '', disabled: false}],
      amountInput: [{value: '', disabled: false}],
      containerId: [{value: '', disabled: false}],
      containerIDs: this.fb.array([])
    });
  }

  onAddContainerID(): void {
    this.containerIDs = this.form.get('containerIDs') as FormArray;
    this.containerIDs.push(this.createItem());
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
    });
  }

  onSubmit() {
    this.reportService.saveReport(this.form.value)
      .subscribe(res => {
          this.toaster.showMessage(res);
        },
        error => {
          this.toaster.showMessage(error);
        }
      );
  }
}

