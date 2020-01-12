import {Injectable, TemplateRef} from '@angular/core'
import {MatSnackBar, MatDialog} from '@angular/material'
import {DialogComponent} from './dialog/dialog.component'

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(private _snack: MatSnackBar, private _dialog: MatDialog) {}

  openSnack(message: string, button: string, ms: number, action: () => void) {
    const snack = this._snack.open(message, button, {
      duration: ms,
      horizontalPosition: 'left'
    })

    snack.onAction().subscribe(() => action())
  }

  openModal(data: DialogData, closed: (data: string) => void) {
    const dialog = this._dialog.open(DialogComponent, {
      width: '250px',
      data
    })

    dialog.afterClosed().subscribe(data => {
      closed(data)
    })
  }
}

export interface DialogData {
  title: string
  message?: string
  messages?: any
  button: string
}
