import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallTranscriptListComponent } from './call-transcript-list/call-transcript-list.component';

const routes: Routes = [
  {
    path : '',
    component : CallTranscriptListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
