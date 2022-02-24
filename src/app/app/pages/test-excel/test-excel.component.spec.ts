import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestExcelComponent } from './test-excel.component';

describe('TestExcelComponent', () => {
  let component: TestExcelComponent;
  let fixture: ComponentFixture<TestExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
