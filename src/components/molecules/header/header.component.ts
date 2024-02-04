import { Component } from '@angular/core';
import { Typography } from '../../atoms/typography/typography.component';
import { Icon } from '../../atoms/icon/icon.component';
import { NotificationPill } from '../../atoms/notificationPill/notificationPill.component';
import { Dropdown } from '../../atoms/dropdown/dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [Typography, Icon, NotificationPill, Dropdown],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class Header {}