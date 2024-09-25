import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestOptionsComponent } from './new-request-options.component';

describe('NewRequestOptionsComponent', () => {
  let component: NewRequestOptionsComponent;
  let fixture: ComponentFixture<NewRequestOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRequestOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRequestOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
