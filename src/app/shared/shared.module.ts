import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LayoutModule } from "@angular/cdk/layout";
import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";
import { AuthInterceptor } from "../auth/auth-interceptor";
import { AuthService } from "../auth/auth.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  exports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [
    AuthService,
    [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
  ]
})
export class SharedModule {}
