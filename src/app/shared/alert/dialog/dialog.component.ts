import {Component, OnInit, Inject} from '@angular/core'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import {DialogData} from '../alert.service'

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  data: DialogData

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) private _data: DialogData) {
    this.data = _data
    console.log(this.data)
  }

  buttonPressed = (data: string) => this.dialogRef.close(data)

  onNoClick(): void {
    this.dialogRef.close('close')
  }
}
