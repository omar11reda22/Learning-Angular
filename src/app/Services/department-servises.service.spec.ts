import { TestBed } from '@angular/core/testing';

import { DepartmentServisesService } from './department-servises.service';

describe('DepartmentServisesService', () => {
  let service: DepartmentServisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepartmentServisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
