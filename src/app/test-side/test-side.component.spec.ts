import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSideComponent } from './test-side.component';

describe('TestSideComponent', () => {
  let component: TestSideComponent;
  let fixture: ComponentFixture<TestSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
