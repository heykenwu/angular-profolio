import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NfcBoxComponent } from './nfc-box.component';

describe('NfcBoxComponent', () => {
  let component: NfcBoxComponent;
  let fixture: ComponentFixture<NfcBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NfcBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NfcBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
