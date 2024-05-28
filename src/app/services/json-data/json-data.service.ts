import { Injectable } from '@angular/core';
import { TranscriptData } from 'src/app/interface/transcript-data';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JsonDataService {
  constructor(private httpClient: HttpClient) {}

  getTranscriptData(): Observable<any> {
    return this.httpClient
      .get<TranscriptData[]>('http://localhost:3000/callTranscriptData')
  }
}
