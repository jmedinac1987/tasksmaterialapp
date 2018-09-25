import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidatedtasksComponent } from './consolidatedtasks.component';

describe('ConsolidatedtasksComponent', () => {
  let component: ConsolidatedtasksComponent;
  let fixture: ComponentFixture<ConsolidatedtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidatedtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidatedtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
