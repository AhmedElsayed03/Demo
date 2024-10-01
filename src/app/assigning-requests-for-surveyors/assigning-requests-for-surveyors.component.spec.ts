import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigningRequestsForSurveyorsComponent } from './assigning-requests-for-surveyors.component';

describe('AssigningRequestsForSurveyorsComponent', () => {
  let component: AssigningRequestsForSurveyorsComponent;
  let fixture: ComponentFixture<AssigningRequestsForSurveyorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssigningRequestsForSurveyorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssigningRequestsForSurveyorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
