import {async, ComponentFixture, ComponentFixtureAutoDetect, TestBed} from '@angular/core/testing';

import { TestSideComponent } from './test-side.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from '../app.component';
import {TestServiceService} from './test-service.service';
import {HttpClientModule} from '@angular/common/http';


describe('TestSideComponent', () => {
  let component: TestSideComponent;
  let fixture: ComponentFixture<TestSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, ReactiveFormsModule],
      declarations: [ TestSideComponent, AppComponent ],
      providers: [ {
        provide: ComponentFixtureAutoDetect, useValue: true
      }, TestServiceService]
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
