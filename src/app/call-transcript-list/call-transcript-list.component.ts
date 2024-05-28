import { AlertService } from './../services/alert/alert.service';
import { TranscriptData } from './../interface/transcript-data';
import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../services/json-data/json-data.service';
import { CellClassRules, SelectionChangedEvent } from 'ag-grid-community';
import { ColumnData } from '../interface/column-data';

@Component({
  selector: 'app-call-transcript-list',
  templateUrl: './call-transcript-list.component.html',
  styleUrls: ['./call-transcript-list.component.scss'],
})
export class CallTranscriptListComponent implements OnInit {
  transcriptData: TranscriptData[] = [];
  selectedData: TranscriptData[] = [];
  columnDefs: any[] = [];
  overlayNoRowsTemplate =
    '<span class="ag-overlay-no-rows-center">No Data Found</span>';

  constructor(
    private jsonDataService: JsonDataService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.manageTable();
  }

  getData(): void {
    this.jsonDataService.getTranscriptData().subscribe({
      next: (response) => {
        const keyMapping: { [key: string]: any } = {
          'id': 'id',
          'Customer ID': 'customerID',
          'Time Frame': 'timeFrame',
          'Call Date': 'callDate',
          'Interaction ID': 'interactionID',
          'Number of Calls': 'numberOfCalls',
          'Sentiment Score': 'sentimentScore',
          'Status': 'status',
          'Last Call': 'lastCall',
          'Transcript': 'transcript',
          'Subject Line': 'subjectLine',
          'Summary': 'summary',
          'Next steps': 'nextSteps',
          'Customer ID__1': 'customerID_1',
          'AHT': 'AHT',
        };
        this.transcriptData = this.transformResponseKeys(response, keyMapping);
      },
      error: (err) => {
        this.alertService.showError(err);
      },
    });
  }

  transformKeys(obj: any, keyMap: { [key: string]: any }): any {
    const transformedObject: any = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = keyMap[key] || key;
        transformedObject[newKey] = obj[key];
      }
    }
    return transformedObject;
  }

  transformResponseKeys(response: any, keyMap: { [key: string]: any }): any {
    if (Array.isArray(response)) {
      return response.map(item => this.transformKeys(item, keyMap));
    } else {
      return this.transformKeys(response, keyMap);
    }
  }



  manageTable(): void {
    const addClass: CellClassRules = {
      likely: (params) => params.value === 'Likely to Escalate',
      'not-likely': (params) => params.value === 'Not Likely',
      escalated: (params) => params.value === 'Escalated',
    };

    this.columnDefs = [
      {
        headerName: '',
        field: '',
        maxWidth: 100,
        checkboxSelection: true,
        headerCheckboxSelection: true,
        headerCheckboxSelectionFilteredOnly: true,
      },
      {
        headerName: 'Customer Id',
        field: 'customerID',
        filter: 'agTextColumnFilter',
      },
      {
        headerName: 'Time Frame',
        field: 'timeFrame',
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Call Date',
        field: 'callDate',
        filter: 'agTextColumnFilter',
        valueFormatter: function (params: { value: Date }) {
          const convertedDate = new Date(params.value);
          return (
            convertedDate.toLocaleDateString() +
            ' ' +
            convertedDate.toLocaleTimeString([], { timeStyle: 'short' })
          );
        },
      },
      {
        headerName: 'No. of Calls',
        field: 'numberOfCalls',
        filter: 'agNumberColumnFilter',
      },
      {
        headerName: 'Last Call',
        field: 'lastCall',
        filter: 'agTextColumnFilter',
      },
      {
        headerName: 'Status',
        field: 'status',
        filter: 'agTextColumnFilter',
        cellClassRules: addClass,
        cellClass: 'status-row',
      },
      {
        headerName: 'Sentiment Score',
        field: 'sentimentScore',
        filter: 'agTextColumnFilter',
      },
    ];

    for (let i = 1; i < this.columnDefs?.length; i++) {
      this.columnDefs[i].maxWidth = 164.9;
      this.columnDefs[i].floatingFilter = true;
    }
  }

  onFilterChanged(event: any) {
    const rowCount = event.api.getDisplayedRowCount();
    if (rowCount === 0) {
      event.api.showNoRowsOverlay();
    } else {
      event.api.hideOverlay();
    }
  }

  getTimeLineData(event: SelectionChangedEvent): void {
    this.selectedData = [];
    const selectedRows = event.api.getSelectedRows();
    for (let i = 0; i < selectedRows.length; i++) {
      this.selectedData?.push(selectedRows[i]);
      this.selectedData = this.sortData(this.selectedData);
    }
  }

  sortData(addData: TranscriptData[]): TranscriptData[] {
    const sortedDate = addData?.sort(
      (firstDate: TranscriptData, secondDate: TranscriptData) => {
        console.log(firstDate.callDate);
        console.log(secondDate.callDate);

        return (
          Number(new Date(firstDate.callDate)) -
          Number(new Date(secondDate.callDate))
        );
      }
    );
    return sortedDate;
  }
}
