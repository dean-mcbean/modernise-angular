import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.sass']
})
export class Icon {
  mask: string = 'default'
  @Input() set icon(value: string) {
    this.mask = `url('./assets/icons/${value}.svg') no-repeat center`
    console.log(this.mask)
  }
  @Input() color: string = 'grey'
}