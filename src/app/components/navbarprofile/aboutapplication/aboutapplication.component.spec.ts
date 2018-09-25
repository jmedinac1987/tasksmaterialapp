import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutapplicationComponent } from './aboutapplication.component';

describe('AboutapplicationComponent', () => {
  let component: AboutapplicationComponent;
  let fixture: ComponentFixture<AboutapplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutapplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
