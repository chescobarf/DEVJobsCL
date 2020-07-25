import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinicardComponent } from './minicard.component';

describe('MinicardComponent', () => {
  let component: MinicardComponent;
  let fixture: ComponentFixture<MinicardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinicardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinicardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
