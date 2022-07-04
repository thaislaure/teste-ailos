import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSearchComponent } from './initial-search.component';

describe('InitialSearchComponent', () => {
  let component: InitialSearchComponent;
  let fixture: ComponentFixture<InitialSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
