import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestLandComponent } from './new-request-land.component';

describe('NewRequestLandComponent', () => {
  let component: NewRequestLandComponent;
  let fixture: ComponentFixture<NewRequestLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRequestLandComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewRequestLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
