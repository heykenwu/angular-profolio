import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortForwarderComponent } from './port-forwarder.component';

describe('PortForwarderComponent', () => {
  let component: PortForwarderComponent;
  let fixture: ComponentFixture<PortForwarderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortForwarderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortForwarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
