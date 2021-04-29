import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnsSpoofingComponent } from './dns-spoofing.component';

describe('DnsSpoofingComponent', () => {
  let component: DnsSpoofingComponent;
  let fixture: ComponentFixture<DnsSpoofingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnsSpoofingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DnsSpoofingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
