import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReportContainerComponent } from './new-report-container.component';

describe('NewReportContainerComponent', () => {
  let component: NewReportContainerComponent;
  let fixture: ComponentFixture<NewReportContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewReportContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewReportContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
