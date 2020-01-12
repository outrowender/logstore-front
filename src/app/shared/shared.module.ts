import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators'
import {AuthInterceptor} from '../auth/auth-interceptor'
import {AuthService} from '../auth/auth.service'
import {AlertService} from './alert/alert.service'
import {DialogComponent} from './alert/dialog/dialog.component'
import {LayoutModule} from '../layout.module'

@NgModule({
  declarations: [DialogComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule, LayoutModule],
  exports: [HttpClientModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule],
  providers: [AuthService, AlertService, [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}]],
  entryComponents: [DialogComponent]
})
export class SharedModule {}
