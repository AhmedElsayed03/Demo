import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestRealEstateComponent } from './new-request-real-estate.component';

describe('NewRequestRealEstateComponent', () => {
  let component: NewRequestRealEstateComponent;
  let fixture: ComponentFixture<NewRequestRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRequestRealEstateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRequestRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
