import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';

import { RouteComponent } from './route.component';
import { RouteModule } from './route.module';
import { of } from 'rxjs';
import { PositionFound, PositionOther } from '../store/actions/position.actions';
import { forgeGeolocation } from '../common';
import { default as wlResponse } from '../../../wl-response.json';
import { WlRoutingService } from '../service/wlRouting.service';

const wlRoutingServiceSpy = { getRoute: jasmine.createSpy('getRoute').and.returnValue(of(wlResponse)) };

describe('RouteComponent', () => {
  let component: RouteComponent;
  let fixture: ComponentFixture<RouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouteModule,
        RouterTestingModule,
        NgxsModule.forRoot(),
      ],
      providers: [
        { provide: WlRoutingService, useValue: wlRoutingServiceSpy },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch routes', (done) => {
    expect(wlRoutingServiceSpy.getRoute).toHaveBeenCalledTimes(0);

    TestBed.inject(Store).dispatch(new PositionFound(forgeGeolocation(1, 2, 3)));
    TestBed.inject(Store).dispatch(new PositionOther(forgeGeolocation(4, 5, 6)));

    component.ngOnInit();

    expect(wlRoutingServiceSpy.getRoute).toHaveBeenCalledTimes(1);

    component.routes$.subscribe(routes => {
      expect(routes.trips).toEqual(wlResponse.trips);
      done();
    });
  });

  it('should set trip', (done) => {
    const trip = wlResponse.trips[0];

    expect(TestBed.inject(Store).snapshot().PublicTransport.trip).toBeFalsy();
    component.showDetails(trip);
    TestBed.inject(Store).select(state => state.PublicTransport.trip).subscribe(tripFromState => {
      expect(tripFromState).toEqual(trip);
      done();
    });
  });

  it('should format the point', () => {
    expect(component.formatPoint(wlResponse.trips[0].legs[1].points[1])).toEqual('19:15 Wien Alterlaa U');
  });
});
