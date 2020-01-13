import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {UserComponent} from './user.component'
import {LayoutModule} from 'src/app/layout.module'
import {SharedModule} from 'src/app/shared/shared.module'
import {HomeRoutingModule} from '../home-routing.module'
import {HttpClientModule} from '@angular/common/http'
import {HomeModule} from '../home.module'
import {RouterTestingModule} from '@angular/router/testing'

describe('UserComponent', () => {
  let component: UserComponent
  let fixture: ComponentFixture<UserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [LayoutModule, SharedModule, HttpClientModule, RouterTestingModule.withRoutes([])]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
