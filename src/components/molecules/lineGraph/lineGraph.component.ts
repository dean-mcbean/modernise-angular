import { Component, Input } from '@angular/core';

type LineGraphDataRow = {
  x: number;
  y: number;
}

type LineGraphData = {
  label: string;
  data: LineGraphDataRow[];
  color: string;
  tooltipGenerator?: (x: number, y: number) => string;
}

@Component({
  selector: 'line-graph',
  standalone: true,
  imports: [],
  templateUrl: './lineGraph.component.html',
  styleUrls: ['./lineGraph.component.sass']
})
export class LineGraph {
  @Input() datasets: LineGraphData[] = [];
}