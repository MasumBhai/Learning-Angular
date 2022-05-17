import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAddressComponent } from './our-address.component';

describe('OurAddressComponent', () => {
  let component: OurAddressComponent;
  let fixture: ComponentFixture<OurAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
