import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LoginComponent} from './auth/login/login.component'
import {RegisterComponent} from './auth/register/register.component'
import {LayoutModule} from './layout.module'
import {SharedModule} from './shared/shared.module'
import {HomeGuard} from './home/guards/home.guard'

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, LayoutModule],
  providers: [HomeGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
