import { Component, Input } from '@angular/core';
import { Typography } from '../typography/typography.component';

@Component({
  selector: 'notification-pill',
  standalone: true,
  imports: [Typography],
  templateUrl: './notificationPill.component.html',
  styleUrls: ['./notificationPill.component.sass']
})
export class NotificationPill {
  @Input() color: string = 'primary';
}