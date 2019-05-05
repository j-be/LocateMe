import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WlRoutingService {

  constructor(private http: HttpClient) { }

  getRoute(origin, destination): Observable<any> {
    const url = `http://localhost:8080/route/${origin.lat}/${origin.lng}/${destination.lat}/${destination.lng}`;
    return this.http.get(url);
  }
}
