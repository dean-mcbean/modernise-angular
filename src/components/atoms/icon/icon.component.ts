import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class Icon {
  @Input() icon: string = 'default';
}