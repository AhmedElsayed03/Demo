import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditRequestsWithSurveyorsComponent } from './audit-requests-with-surveyors.component';

describe('AuditRequestsWithSurveyorsComponent', () => {
  let component: AuditRequestsWithSurveyorsComponent;
  let fixture: ComponentFixture<AuditRequestsWithSurveyorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuditRequestsWithSurveyorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditRequestsWithSurveyorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
