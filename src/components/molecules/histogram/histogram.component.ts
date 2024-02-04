import { Component, Input } from '@angular/core';

type HistogramDataRow = {
  x: number;
  y: number;
}

type HistogramData = {
  label: string;
  data: HistogramDataRow[];
  color: string;
  tooltipGenerator?: (x: number, y: number) => string;
}

@Component({
  selector: 'histogram',
  standalone: true,
  imports: [],
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.sass']
})
export class Histogram {
  @Input() datasets: HistogramData[] = [];
}