import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogFeaturesRightComponent } from './blog-features-right.component';

describe('BlogFeaturesRightComponent', () => {
  let component: BlogFeaturesRightComponent;
  let fixture: ComponentFixture<BlogFeaturesRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogFeaturesRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogFeaturesRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
