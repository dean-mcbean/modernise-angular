import { Component } from '@angular/core';
import { Typography } from '../../atoms/typography/typography.component';
import { Icon } from '../../atoms/icon/icon.component';
import { NotificationPill } from '../../atoms/notificationPill/notificationPill.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Typography, Icon, NotificationPill],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class Header {}