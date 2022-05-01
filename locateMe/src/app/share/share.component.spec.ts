import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { PositionFound, StartLocating } from '../store/actions/position.actions';

import { ShareComponent } from './share.component';
import { ShareModule } from './share.module';

describe('ShareComponent', () => {
  let component: ShareComponent;
  let fixture: ComponentFixture<ShareComponent>;
  let store: Store;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ShareModule,
        NgxsModule.forRoot(),
      ],
    })
    .compileComponents();

    store = TestBed.inject(Store);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should stop locating when displaying links', () => {
    const watches: unknown[] = [];
    store.select(state => state.GeolocationState.locationWatchId)
      .subscribe(watch => watches.push(watch));

    store.dispatch(new StartLocating());
    component.showDialog();

    expect(watches.length).toBe(3);
    expect(watches[0]).toBeNull();
    expect(watches[1]).toBeTruthy();
    expect(watches[2]).toBeNull();
  });

  it('should should generate links', () => {
    const location: GeolocationPosition = {
      coords: {
        latitude: 1,
        longitude: 2,
        accuracy: 3,
        altitude: null,
        altitudeAccuracy: null,
        heading: null,
        speed: null,
      },
      timestamp: 0,
    };

    store.dispatch(new PositionFound(location));
    component.showDialog();

    expect(component.links).toBeTruthy();
    expect(component.links?.link.endsWith('/#1+2+3')).toBeTrue();
    expect(component.links?.mailto.endsWith('/#1+2+3')).toBeTrue();
    expect(component.links?.whatsApp.endsWith('/#1+2+3')).toBeTrue();
    expect("" + component.links?.sms).toMatch(/\/#1\+2\+3 /);
  });
});
