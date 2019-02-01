import { TestBed } from '@angular/core/testing';

import { QuoteGeneratorService } from './quote-generator.service';

describe('QuoteGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteGeneratorService = TestBed.get(QuoteGeneratorService);
    expect(service).toBeTruthy();
  });
});
