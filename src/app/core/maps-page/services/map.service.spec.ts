import { of, throwError } from 'rxjs';

import { MapService, Map } from './map.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let mapService: MapService;

const mockResponse: Map[] = [
  { id: '1', label: 'Map 1', tags: ['tag1', 'tag2'], description: 'Description 1', url_wiki: 'http://example.com', play_count: 10 },
  { id: '2', label: 'Map 2', tags: ['tag1'], description: 'Description 2', url_wiki: 'http://example.com', play_count: 5 }
];


beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  mapService = new MapService(httpClientSpy);
});

it('should be created', () => {
  expect(mapService).toBeTruthy();
});

it('should return an array of maps', (done: DoneFn) => {
  httpClientSpy.get.and.returnValue(of(mockResponse));
  mapService.getMaps$().subscribe({
    next: (maps) => {
      expect(maps)
        .withContext('expected maps')
        .toEqual(mockResponse);
      done()
    },
    error: () => done.fail()
  });
  expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
});

it('should handle HTTP errors', (done: DoneFn) => {
  const errorResponse = new HttpErrorResponse({});
  httpClientSpy.get.and.returnValue(throwError(errorResponse));
  mapService.getMaps$().subscribe({
    next: (maps) => { console.log(maps); done.fail('Expected an error, but received a successful response') },
    error: (error: HttpErrorResponse) => {
      expect(error).toContain('Something went wrong. Please try again later.');
      done();
    }
  });

  expect(httpClientSpy.get.calls.count())
    .withContext('one call')
    .toBe(1);
});
