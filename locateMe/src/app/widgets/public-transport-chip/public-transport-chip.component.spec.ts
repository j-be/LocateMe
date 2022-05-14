import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { WidgetsModule } from '../widgets.module';

import { PublicTransportChipComponent } from './public-transport-chip.component';

describe('PublicTransportChipComponent', () => {
  let component: PublicTransportChipComponent;
  let fixture: ComponentFixture<PublicTransportChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        WidgetsModule,
        NgxsModule.forRoot(),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicTransportChipComponent);
    component = fixture.componentInstance;
    component.line = { type: '3', number: '66A' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should translate type to icon', () => {
    expect(component.styleClass).toEqual('bus');
  });
});
