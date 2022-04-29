import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { RouteComponent } from '../route/route.component';

import { RouteDetailComponent } from './route-detail.component';
import { RouteModule } from '../route/route.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('RouteDetailComponent', () => {
  let component: RouteDetailComponent;
  let fixture: ComponentFixture<RouteDetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouteModule,
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
