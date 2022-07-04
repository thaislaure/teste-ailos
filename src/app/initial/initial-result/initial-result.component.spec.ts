import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialResultComponent } from './initial-result.component';

describe('InitialResultComponent', () => {
  let component: InitialResultComponent;
  let fixture: ComponentFixture<InitialResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
