import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedRequestDetailsComponent } from './assigned-request-details.component';

describe('AssignedRequestDetailsComponent', () => {
  let component: AssignedRequestDetailsComponent;
  let fixture: ComponentFixture<AssignedRequestDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignedRequestDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignedRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
