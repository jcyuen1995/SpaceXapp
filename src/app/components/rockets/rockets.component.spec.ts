import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RocketsComponent } from './rockets.component';

describe('RocketsComponent', () => {
  let component: RocketsComponent;
  let fixture: ComponentFixture<RocketsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
