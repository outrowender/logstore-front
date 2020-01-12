import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material'
import {MatButtonModule} from '@angular/material/button'
import {MatSnackBarModule} from '@angular/material/snack-bar'

@NgModule({
  declarations: [],
  imports: [CommonModule, FlexLayoutModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSnackBarModule],
  exports: [FlexLayoutModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButtonModule, MatSnackBarModule]
})
export class LayoutModule {}
