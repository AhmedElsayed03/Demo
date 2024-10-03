import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestFinalRevisionComponent } from './request-final-revision.component';

describe('RequestFinalRevisionComponent', () => {
  let component: RequestFinalRevisionComponent;
  let fixture: ComponentFixture<RequestFinalRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestFinalRevisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RequestFinalRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
