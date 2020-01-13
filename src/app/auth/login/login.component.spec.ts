import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {LoginComponent} from './login.component'
import {LayoutModule} from 'src/app/layout.module'
import {SharedModule} from 'src/app/shared/shared.module'
import {HomeModule} from 'src/app/home/home.module'
import {RouterTestingModule} from '@angular/router/testing'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
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
})
