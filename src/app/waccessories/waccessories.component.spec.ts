import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaccessoriesComponent } from './waccessories.component';

describe('WaccessoriesComponent', () => {
  let component: WaccessoriesComponent;
  let fixture: ComponentFixture<WaccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
