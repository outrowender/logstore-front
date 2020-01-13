import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {RegisterComponent} from './register.component'
import {LayoutModule} from 'src/app/layout.module'
import {SharedModule} from 'src/app/shared/shared.module'
import {AppRoutingModule} from 'src/app/app-routing.module'
import {AppModule} from 'src/app/app.module'
import {RouterTestingModule} from '@angular/router/testing'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

describe('RegisterComponent', () => {
  let component: RegisterComponent
  let fixture: ComponentFixture<RegisterComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [LayoutModule, SharedModule, RouterTestingModule.withRoutes([]), BrowserAnimationsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
