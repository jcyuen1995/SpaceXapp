import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleRocketComponent } from './single-rocket.component';

describe('SingleRocketComponent', () => {
  let component: SingleRocketComponent;
  let fixture: ComponentFixture<SingleRocketComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
