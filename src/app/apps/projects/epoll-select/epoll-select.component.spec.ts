import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpollSelectComponent } from './epoll-select.component';

describe('EpollSelectComponent', () => {
  let component: EpollSelectComponent;
  let fixture: ComponentFixture<EpollSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpollSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpollSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
