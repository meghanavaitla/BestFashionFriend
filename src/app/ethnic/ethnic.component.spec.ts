import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EthnicComponent } from './ethnic.component';

describe('EthnicComponent', () => {
  let component: EthnicComponent;
  let fixture: ComponentFixture<EthnicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EthnicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EthnicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
