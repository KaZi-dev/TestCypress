import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestSideComponent } from './test-side/test-side.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TestServiceService} from './test-side/test-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestSideComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
