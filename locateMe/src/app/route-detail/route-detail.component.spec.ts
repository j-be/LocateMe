import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { RouteComponent } from '../route/route.component';

import { RouteDetailComponent } from './route-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteDetailModule } from './route-detail.module';

describe('RouteDetailComponent', () => {
  let component: RouteDetailComponent;
  let fixture: ComponentFixture<RouteDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouteDetailModule,
        RouterTestingModule,
        NgxsModule.forRoot(),
      ],
      providers: [
        RouteComponent,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
