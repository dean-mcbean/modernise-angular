import { Component, Input } from '@angular/core';

@Component({
  selector: 'tile',
  standalone: true,
  imports: [],
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.sass']
})
export class Tile {
  @Input() padding: string = '28px';
}