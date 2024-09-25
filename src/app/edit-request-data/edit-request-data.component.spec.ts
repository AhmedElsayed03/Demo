import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRequestDataComponent } from './edit-request-data.component';

describe('EditRequestDataComponent', () => {
  let component: EditRequestDataComponent;
  let fixture: ComponentFixture<EditRequestDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRequestDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditRequestDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
