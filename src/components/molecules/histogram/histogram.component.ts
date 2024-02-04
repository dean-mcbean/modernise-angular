import { Component, Input } from '@angular/core';
import { Typography } from '../../atoms/typography/typography.component';

type HistogramBar = {
  x: number | string;
  y: number;
}

type HistogramBarProcessed = {
  heightPercentage: number;
  x: number | string;
}


@Component({
  selector: 'histogram',
  standalone: true,
  imports: [Typography],
  templateUrl: './histogram.component.html',
  styleUrls: ['./histogram.component.sass']
})
export class Histogram {
  processedBars: HistogramBarProcessed[] = [];
  @Input() set bars(value: HistogramBar[]) {
    const max = Math.max(...value.map(bar => bar.y));
    this.processedBars = value.map(bar => {
      return {
        heightPercentage: bar.y / max * 100,
        x: bar.x,
      }
    });
  }
}