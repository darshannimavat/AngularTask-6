import { Component, Input, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { TranscriptData } from '../../interface/transcript-data';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.scss']
})
export class TimeLineComponent implements OnInit {
  @Input() receiveSelectedId?: TranscriptData[] = [];

  constructor() {}

  ngOnInit(): void {
    Aos.init();
  }

}
