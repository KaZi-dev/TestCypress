import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  name: string;
  address: string;
  gender: string;
  teststr: string;
  processID: string;
  processID2: string;
  prIDUser: string;
  userTaskID: string;
  obj = {};
  private engineRESTUrl = 'http://localhost:8080/engine-rest';

  constructor(private http: HttpClient) { }
  public setName(value: string) {
    this.name = value;
  }
  public setAddress(value: string) {
    this.address = value;
  }
  public setGender(value: string) {
    this.gender = value;
  }
  public parse() {
    this.teststr = '{ "variables": {"name": "' + this.name + '", "address": "' + this.address + '", "gender": "' + this.gender + '"}}';
    console.log('Name: ' + this.name + ', Address: ' + this.address + ', Gender: ' + this.gender);
  }
  public getProcessIDafterStart(): Observable<any> {
    this.http.post('http://localhost:8080/engine-rest/process-definition/key/CamundaP/start', {observe: 'body'}).subscribe(result => {
      this.processID = JSON.stringify(result);
      this.processID2 = this.processID.substr(85, 36);
      console.log(this.processID);
      console.log(this.processID2);
    });
    return this.http.get('http://localhost:8080/engine-rest/process-definition/key/CamundaP/start');
  }
  public complUserTask(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://localhost:8080/engine-rest/task?name=User-Interaction&processInstanceId=' + this.processID2, {observe: 'body'})
      .subscribe(
      result => {
        this.prIDUser = JSON.stringify(result);
        this.userTaskID = this.prIDUser.substr(8, 36);
        console.log('USerID' + this.userTaskID);
        console.log(this.prIDUser);
        this.UserTask().subscribe();
      });
    return this.http.get('http://localhost:8080/engine-rest/task?name=User-Interaction&processInstanceId' + this.processID2);
  }
  public UserTask(): Observable<any> {
    return this.http.post('http://localhost:8080/engine-rest/task/' + this.userTaskID + '/submit-form', {variables: {
      name: {value: this.name, type: 'String'},
        address: {value: this.address, type: 'String'},
        gender: {value: this.gender, type: 'String'}
      }});
  }
}
