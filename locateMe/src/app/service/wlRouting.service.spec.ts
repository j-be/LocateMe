import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { forgeGeolocation } from '../common';

import { WlRoutingService } from './wlRouting.service';
import { default as wlResponse } from '../../../wl-response.json';

describe('WlRoutingService', () => {
  let service: WlRoutingService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        WlRoutingService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(WlRoutingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch', () => new Promise<void>(done => {
    service.getRoute(forgeGeolocation(11, 12, 13), forgeGeolocation(14, 15, 16)).subscribe(response => {
      expect(response).toEqual(wlResponse);
      done();
    });

    httpMock.expectOne((req) => req.url.endsWith('/ogd_routing/XML_TRIP_REQUEST2') &&
      req.params.get('name_origin') === '12:11:WGS84' &&
      req.params.get('name_destination') === '15:14:WGS84' &&
      req.method === 'GET'
    ).flush(wlResponse);
  }));
});
