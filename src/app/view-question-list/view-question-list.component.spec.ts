import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuestionListComponent } from './view-question-list.component';

describe('ViewQuestionListComponent', () => {
  let component: ViewQuestionListComponent;
  let fixture: ComponentFixture<ViewQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
