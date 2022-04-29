import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, retry} from 'rxjs';
import {environment} from '../../environments/environment';

const url = `${environment.wlRoutingHost}/ogd_routing/XML_TRIP_REQUEST2?` +
  'locationServerActive=1&type_origin=coord&type_destination=coord&outputFormat=JSON';

@Injectable()
export class WlRoutingService {

  constructor(private http: HttpClient) { }

  private static formatLocation(position: GeolocationPosition) {
    return `${position.coords.longitude}:${position.coords.latitude}:WGS84`;
  }

  getRoute(origin: GeolocationPosition, destination: GeolocationPosition): Observable<any> {
    const options = {
      params: new HttpParams()
        .set('name_origin', WlRoutingService.formatLocation(origin))
        .set('name_destination', WlRoutingService.formatLocation(destination)) };
    return this.http.get(url, options)
      .pipe(
        retry({count: 3, delay: 1000}),
      );
  }
}
