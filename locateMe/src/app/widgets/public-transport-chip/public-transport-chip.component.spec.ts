import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideStore } from '@ngxs/store';

import { PublicTransportChipComponent } from './public-transport-chip.component';
import { GeolocationState } from '../../store/states/app.state';
import { MessageService } from 'primeng/api';

describe('PublicTransportChipComponent', () => {
  let component: PublicTransportChipComponent;
  let fixture: ComponentFixture<PublicTransportChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PublicTransportChipComponent,
      ],
      providers: [
        provideStore([
          GeolocationState,
        ]),
        MessageService,
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
    expect(component.styleClass).toEqual('directions_bus');
  });

  it('should return line number', () => {
    expect(component.lineName).toEqual('66A');
  });
});
