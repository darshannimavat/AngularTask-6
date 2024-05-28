import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CallTranscriptListComponent } from './call-transcript-list/call-transcript-list.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';
import { TimeLineComponent } from './components/time-line/time-line.component';


@NgModule({
  declarations: [AppComponent, TimeLineComponent, CallTranscriptListComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridAngular,
    AgGridModule,
    ToastrModule.forRoot(),
  ],
})
export class AppModule {}
