import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TestServiceService} from './test-service.service';

@Component({
  selector: 'app-test-side',
  templateUrl: './test-side.component.html',
  styleUrls: ['./test-side.component.css']
})
export class TestSideComponent implements OnInit {
  hidP: boolean;
  @Input() userName: string;
  @Input() userAddress: string;

  constructor(private testServiceService: TestServiceService) { }

  ngOnInit(): void {
    this.hidP = true;
  }

  btnClick() {
    this.hidP = false;
    this.testServiceService.getProcessIDafterStart();
  }

  comData() {
    this.testServiceService.setName(this.userName);
    this.testServiceService.setAddress(this.userAddress);
    this.testServiceService.parse();
    this.testServiceService.complUserTask();
  }
}
