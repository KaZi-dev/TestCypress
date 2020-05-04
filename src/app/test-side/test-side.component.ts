import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-test-side',
  templateUrl: './test-side.component.html',
  styleUrls: ['./test-side.component.css']
})
export class TestSideComponent implements OnInit {
  hidP: boolean;
  name: string;
  address: string;

  constructor() { }

  ngOnInit(): void {
    this.hidP = true;
  }

  btnClick() {
    this.hidP = false;
  }
}
