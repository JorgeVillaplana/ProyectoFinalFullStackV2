import { TestBed } from '@angular/core/testing';

import { SelectedlangService } from './selectedlang.service';

describe('SelectedlangService', () => {
  let service: SelectedlangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedlangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
