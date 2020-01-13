import {TestBed} from '@angular/core/testing'

import {AlertService} from './alert.service'
import {LayoutModule} from 'src/app/layout.module'

describe('AlertService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [LayoutModule]
    })
  )

  it('should be created', () => {
    const service: AlertService = TestBed.get(AlertService)
    expect(service).toBeTruthy()
  })
})
