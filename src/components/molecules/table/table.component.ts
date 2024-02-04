import { Component, Input } from '@angular/core';
import { Typography } from '../../atoms/typography/typography.component';

export type TableColumn = {
  label: string;
  type: 'text' | 'status' | 'thumbnail-text';
}

export type TableDataItem = {
  value: string | number;
  href?: string;
} | string | number

type TableDataItemStrict = {
  value: string | number;
  href?: string;
}

export type TableDataRow = TableDataItem[]

type TableDataRowStrict = TableDataItemStrict[]

function processRows(rows: TableDataRow[]) {
  return rows.map(row => row.map(item => {
    if (typeof item === 'string' || typeof item === 'number') {
      return { value: item }
    }
    return item
  }))
}

@Component({
  selector: 'display-table',
  standalone: true,
  imports: [Typography],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class Table {
  @Input() columns: TableColumn[] = [];

  private _rows: TableDataRow[] = [];
  get rows(): TableDataRow[] {
    return this._rows;
  }
  @Input() set rows(value: TableDataRow[]) {
    this._rows = value;
    this.processed_rows = processRows(value);
  }

  processed_rows: TableDataRowStrict[] = processRows(this.rows);
}