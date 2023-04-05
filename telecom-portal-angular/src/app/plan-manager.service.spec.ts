import { TestBed } from '@angular/core/testing';

import { PlanManagerService } from './plan-manager.service';

describe('PlanManagerService', () => {
  let service: PlanManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlanManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
