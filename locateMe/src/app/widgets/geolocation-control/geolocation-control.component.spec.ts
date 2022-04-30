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
});
