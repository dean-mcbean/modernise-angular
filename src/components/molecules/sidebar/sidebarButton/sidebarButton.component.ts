import { Component, Input } from '@angular/core';
import { Icon } from '../../../atoms/icon/icon.component';
import { Typography } from '../../../atoms/typography/typography.component';
import { NotificationPill } from '../../../atoms/notificationPill/notificationPill.component';

@Component({
  selector: 'sidebar-button',
  standalone: true,
  imports: [Icon, Typography, NotificationPill],
  templateUrl: './sidebarButton.component.html',
  styleUrls: ['./sidebarButton.component.sass']
})
export class SidebarButton {
  @Input() text: string = 'Sidebar Button';
  @Input() icon: string = 'fa fa-bars';
  @Input() active: boolean = false;
  @Input() notifications?: number;
}