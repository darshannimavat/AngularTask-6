export interface TranscriptData {
  // id: string
  // "Customer ID": number;
  // "Time Frame": number;
  // "Call Date": Date;
  // "Interaction ID": number;
  // "Number of Calls": number;
  // "Sentiment Score"?: number;
  // "Status": string;
  // "Last Call"?: string;
  // "Transcript"?: string;
  // "Subject Line"?: string;
  // "Summary"?: string;
  // "Next steps"?: string;
  // "Customer ID__1"?: number;
  // "AHT"?: number;

  id: string
  customerID: number;
  timeFrame: number;
  callDate: Date;
  interactionID: number;
  numberOfCalls: number;
  sentimentScore?: number;
  status: string;
  lastCall?: string;
  transcript?: string;
  subjectLine?: string;
  summary?: string;
  nextSteps?: string;
  customerID_1?: number;
  AHT?: number;
}
