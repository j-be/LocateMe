import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgxsModule, provideStates } from '@ngxs/store';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { MePositionState, OtherPositionState } from '../store/states/app.state';

const routerSpy = { navigate: jasmine.createSpy('navigate').and.returnValue(Promise.resolve(true)) };

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot(),

        RouterModule,
        HomeComponent,
      ],
      providers: [
        provideStates([
          MePositionState,
          OtherPositionState,
        ]),
        { provide: ActivatedRoute, useValue: { fragment: of('7+8+9'), } },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    routerSpy.navigate.calls.reset();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to map', (done) => {
    component.positionOther$.subscribe(positionOther => {
      expect(positionOther.coords.latitude).toEqual(7);
      expect(positionOther.coords.longitude).toEqual(8);
      expect(positionOther.coords.accuracy).toEqual(9);
      expect(routerSpy.navigate).toHaveBeenCalledOnceWith(['map'], { skipLocationChange: true });
      done();
    });
  });
});

describe('HomeComponent - no fragment', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot(),

        RouterModule,
        HomeComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: { fragment: of(null), } },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    routerSpy.navigate.calls.reset();
    TestBed.createComponent(HomeComponent).detectChanges();
  });

  it('should not emit', () => {
    expect(routerSpy.navigate).toHaveBeenCalledTimes(0);
  });
});
