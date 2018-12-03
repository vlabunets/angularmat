import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportInfoComponent } from './transport-info.component';

describe('TransportInfoComponent', () => {
  let component: TransportInfoComponent;
  let fixture: ComponentFixture<TransportInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
