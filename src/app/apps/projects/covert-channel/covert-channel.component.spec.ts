import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovertChannelComponent } from './covert-channel.component';

describe('CovertChannelComponent', () => {
  let component: CovertChannelComponent;
  let fixture: ComponentFixture<CovertChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovertChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovertChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
