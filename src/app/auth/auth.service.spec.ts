import {TestBed} from '@angular/core/testing'

import {AuthService} from './auth.service'
import {LayoutModule} from '../layout.module'
import {AppRoutingModule} from '../app-routing.module'
import {SharedModule} from '../shared/shared.module'
import {AppModule} from '../app.module'

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [LayoutModule, AppRoutingModule, SharedModule, AppModule]
    })
  )

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService)
    expect(service).toBeTruthy()
  })
})
