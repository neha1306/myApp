import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgchangeComponent } from './ngchange.component';

describe('NgchangeComponent', () => {
  let component: NgchangeComponent;
  let fixture: ComponentFixture<NgchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
