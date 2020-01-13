import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {LoginComponent} from './login.component'
import {LayoutModule} from 'src/app/layout.module'
import {SharedModule} from 'src/app/shared/shared.module'
import {HomeModule} from 'src/app/home/home.module'
import {RouterTestingModule} from '@angular/router/testing'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {password} from '@rxweb/reactive-form-validators'
describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [LayoutModule, SharedModule, HomeModule, RouterTestingModule.withRoutes([]), BrowserAnimationsModule],
      providers: []
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('shoud render main form', () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const comp = fixture.componentInstance
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement

    const loginInput = compiled.querySelector('input[id="email"]')
    const passwordInput = compiled.querySelector('input[id="password"]')
    const submitButton = compiled.querySelector('button[type="submit"]')

    expect(loginInput).toBeTruthy()
    expect(passwordInput).toBeTruthy()
    expect(submitButton).toBeTruthy()
  })

  it('shoud have a "create account" button', () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const comp = fixture.componentInstance
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement

    const accountButton = compiled.querySelector('a[href="/register"]')

    expect(accountButton).toBeTruthy()
  })

  it('shoud have a main icon', () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const comp = fixture.componentInstance
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement

    const icon = compiled.querySelector('img[alt="Angular Logo"]')

    expect(icon).toBeTruthy()
  })
})
