import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherpopoverComponent } from './weatherpopover.component';

describe('WeatherpopoverComponent', () => {
  let component: WeatherpopoverComponent;
  let fixture: ComponentFixture<WeatherpopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherpopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherpopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
