import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, provideStates } from '@ngxs/store';

import { GeolocationControlComponent } from './geolocation-control.component';
import { GeolocationState } from '../../store/states/app.state';
import { MessageService } from 'primeng/api';

describe('GeolocationControlComponent', () => {
  let component: GeolocationControlComponent;
  let fixture: ComponentFixture<GeolocationControlComponent>;
  let initialGeolocation: unknown;

  beforeAll(() => {
    initialGeolocation = navigator.geolocation;
    (navigator as any).geolocation = {
      watchPosition: vi.fn(() => 1),
      clearWatch: vi.fn(),
      getCurrentPosition: vi.fn(),
    };
  });

  afterAll(() => {
    (navigator as any).geolocation = initialGeolocation;
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot(),

        GeolocationControlComponent,
      ],
      providers: [
        provideStates([
          GeolocationState,
        ]),
        MessageService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeolocationControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start and stop geolocation', () => new Promise<void>(done => {
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
  }));
});
