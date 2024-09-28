import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSingleRequestComponent } from './assign-single-request.component';

describe('AssignSingleRequestComponent', () => {
  let component: AssignSingleRequestComponent;
  let fixture: ComponentFixture<AssignSingleRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssignSingleRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssignSingleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
