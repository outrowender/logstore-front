import {TestBed} from '@angular/core/testing'

import {NoteService} from './note.service'
import {LayoutModule} from 'src/app/layout.module'
import {SharedModule} from 'src/app/shared/shared.module'

describe('NoteService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [LayoutModule, SharedModule]
    })
  )

  it('should be created', () => {
    const service: NoteService = TestBed.get(NoteService)
    expect(service).toBeTruthy()
  })
})
