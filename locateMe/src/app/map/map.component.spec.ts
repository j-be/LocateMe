import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { latLng } from 'leaflet';
import { forgeGeolocation } from '../common';
import { PositionFound, PositionOther } from '../store/actions/position.actions';

import { MapComponent } from './map.component';
import { MapModule } from './map.module';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MapModule,
        NgxsModule.forRoot()
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should put Me pin', () => {
    TestBed.inject(Store).dispatch(new PositionFound(forgeGeolocation(1, 2, 3)));
    expect((component['me']).marker.getLatLng()).toEqual(latLng({ lat: 1, lng: 2 }));
    expect((component['me']).accuracy.getRadius()).toEqual(3);
    expect((component['map'])?.getCenter()).toEqual(latLng({ lat: 1, lng: 2 }));
  });

  it('should put Other pin', () => {
    TestBed.inject(Store).dispatch(new PositionOther(forgeGeolocation(4, 5, 6)));
    expect((component['other']).marker.getLatLng()).toEqual(latLng({ lat: 4, lng: 5 }));
    expect((component['other']).accuracy.getRadius()).toEqual(6);
    expect((component['map'])?.getCenter()).toEqual(latLng({ lat: 4, lng: 5 }));
  });

  it('should pan to both', () => {
    TestBed.inject(Store).dispatch(new PositionFound(forgeGeolocation(10, 20, 3)));
    TestBed.inject(Store).dispatch(new PositionOther(forgeGeolocation(40, 50, 6)));
    expect(component['map']?.getCenter().lat).toBeCloseTo(26, 1);
    expect(component['map']?.getCenter().lng).toBeCloseTo(35);

    expect(component['map']?.getBounds().getWest()).toBeLessThan(20);
    expect(component['map']?.getBounds().getEast()).toBeGreaterThan(50);
    expect(component['map']?.getBounds().getSouth()).toBeLessThan(10);
    expect(component['map']?.getBounds().getNorth()).toBeGreaterThan(40);
  });
});
