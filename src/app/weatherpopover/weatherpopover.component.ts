import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-weatherpopover',
  templateUrl: './weatherpopover.component.html',
  styleUrls: ['./weatherpopover.component.scss']
})
export class WeatherpopoverComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef: MatDialogRef<WeatherpopoverComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close();
  }

}
