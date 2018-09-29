import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindshowComponent } from './findshow.component';

describe('FindshowComponent', () => {
  let component: FindshowComponent;
  let fixture: ComponentFixture<FindshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
