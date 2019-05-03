import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class WlRoutingService {

  constructor(private http: HttpClient) { }

  getRoute(origin, destination) {
    console.log('Origin: ' + origin);
    console.log('Dest: ' + destination);

    console.log(origin.lat);
    console.log(origin.lng);

    const url = `http://localhost:8080/route/${origin.lat}/${origin.lng}/${destination.lat}/${destination.lng}`;
    console.log(url);
    return this.http.get(url);
  }
}
