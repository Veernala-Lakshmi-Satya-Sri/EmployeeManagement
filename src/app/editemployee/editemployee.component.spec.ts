import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeeComponent } from './editemployee.component';

describe('EditemployeeComponent', () => {
  let component: EditemployeeComponent;
  let fixture: ComponentFixture<EditemployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditemployeeComponent]
    });
    fixture = TestBed.createComponent(EditemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
