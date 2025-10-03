import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
    jest.clearAllMocks();
  });

  describe('Service Creation', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('getData', () => {
    it('should call the correct URL and return data', () => {
      const mockResponse = [
        { userId: 1, id: 1, title: 'Test Title', body: 'Body' },
        { userId: 2, id: 2, title: 'Another Title', body: 'Body 2' },
      ];

      let received: any[] | undefined;
      service.getData().subscribe((data) => (received = data));

      const req = httpTestingController.expectOne(service.url);
      expect(req.request.method).toBe('GET');
      req.flush(mockResponse);

      expect(received).toBeDefined();
      expect(received?.length).toBe(2);
      expect(received?.[0].title).toBe('Test Title');
    });

    it('should propagate http error', () => {
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      let errorResponse: any;
      service.getData().subscribe({
        next: () => fail('should not succeed'),
        error: (err) => (errorResponse = err),
      });

      const req = httpTestingController.expectOne(service.url);
      req.flush(
        { message: 'Not found' },
        { status: 404, statusText: 'Not Found' }
      );

      expect(errorResponse).toBeDefined();
      expect(errorResponse.status).toBe(404);
      consoleSpy.mockRestore();
    });
  });
});
