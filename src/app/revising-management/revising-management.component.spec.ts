import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisingManagementComponent } from './revising-management.component';

describe('RevisingManagementComponent', () => {
  let component: RevisingManagementComponent;
  let fixture: ComponentFixture<RevisingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisingManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
