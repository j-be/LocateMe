import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { WidgetsModule } from '../widgets.module';

import { GeolocationControlComponent } from './geolocation-control.component';

describe('GeolocationControlComponent', () => {
  let component: GeolocationControlComponent;
  let fixture: ComponentFixture<GeolocationControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WidgetsModule,
        NgxsModule.forRoot(),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start and stop geolocation', (done: DoneFn) => {
    const ids: unknown[] = [];
    component.locationWatchId$.subscribe(watchId => {
      ids.push(watchId);
      if (ids?.length === 3) {
        expect(ids[0]).toBeNull();
        expect(ids[1]).toBeTruthy();
        expect(ids[2]).toBeNull();
        done();
      }
    });
    component.locateMe();
    component.stopLocatingMe();
  });
});
