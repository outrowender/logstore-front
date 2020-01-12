import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material'
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatDialogModule} from '@angular/material/dialog'

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatDialogModule],
  exports: [FlexLayoutModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSnackBarModule, MatDialogModule]
})
export class LayoutModule {}
