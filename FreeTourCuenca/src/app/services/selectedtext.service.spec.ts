import { TestBed } from '@angular/core/testing';

import { SelectedtextService } from './selectedtext.service';

describe('SelectedtextService', () => {
  let service: SelectedtextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedtextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
