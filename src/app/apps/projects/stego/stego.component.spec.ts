import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StegoComponent } from './stego.component';

describe('StegoComponent', () => {
  let component: StegoComponent;
  let fixture: ComponentFixture<StegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
