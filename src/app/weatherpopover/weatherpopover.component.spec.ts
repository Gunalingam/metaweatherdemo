import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherpopoverComponent } from './weatherpopover.component';
import { MaterialModule} from '../app-material.module';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';


describe('WeatherpopoverComponent', () => {
  let component: WeatherpopoverComponent;
  let fixture: ComponentFixture<WeatherpopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
      ],
      declarations: [
        WeatherpopoverComponent
      ],
      providers:[
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
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
