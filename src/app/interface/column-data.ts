export interface ColumnData {
  headerName: string;
  field: string;
  maxWidth?: number;
  checkboxSelection?: boolean;
  headerCheckboxSelection?: boolean;
  filter?: string;
  floatingFilter?: boolean;
  valueFormatter?: Date;
  cellClassRules?: string;
  cellClass?: string;
}
