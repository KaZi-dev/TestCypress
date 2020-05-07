import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSideComponent } from './test-side.component';
import {FormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import {TestServiceService} from './test-service.service';


describe('TestSideComponent', () => {
  let component: TestSideComponent;
  let fixture: ComponentFixture<TestSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TestSideComponent, AppComponent, TestServiceService ]
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
