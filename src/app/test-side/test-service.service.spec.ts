import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { TestServiceService } from './test-service.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('TestServiceService', () => {
  let service: TestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [TestServiceService]
    });
    service = TestBed.inject(TestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
