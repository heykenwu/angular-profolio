import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketSniffingComponent } from './packet-sniffing.component';

describe('PacketSniffingComponent', () => {
  let component: PacketSniffingComponent;
  let fixture: ComponentFixture<PacketSniffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketSniffingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketSniffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
