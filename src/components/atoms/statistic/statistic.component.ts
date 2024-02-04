import { Component, Input } from '@angular/core';
import { Typography } from '../typography/typography.component';

@Component({
  selector: 'statistic',
  standalone: true,
  imports: [Typography],
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.sass']
})
export class Statistic {
  @Input() name: string = 'Name';
  @Input() value: number | string = 'Value';
}