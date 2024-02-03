import { Component, Input } from '@angular/core';

@Component({
  selector: 'typography',
  standalone: true,
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.sass']
})
export class Typography {
  @Input() variant: string = 'text1';
  @Input() color?: string;
}