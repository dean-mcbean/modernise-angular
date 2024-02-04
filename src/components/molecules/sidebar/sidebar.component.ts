import { Component } from '@angular/core';
import { SidebarButton } from './sidebarButton/sidebarButton.component';
import { NotificationPill } from '../../atoms/notificationPill/notificationPill.component';
import { Typography } from '../../atoms/typography/typography.component';

const buttons = [
  { text: 'Dashboard', icon: 'common/Home', active: true },
  { text: 'Orders', icon: 'common/List', notifications: 16},
  { text: 'Products', icon: 'finance/Tag' },
  { text: 'Categories', icon: 'files/Folder' },
  { text: 'Customers', icon: 'common/Users' },
  { text: 'Reports', icon: 'common/Statistics' },
  { text: 'Coupons', icon: 'common/Star' },
  { text: 'Index', icon: 'communication/Chat' },
  { header: 'Other Information' },
  { text: 'Knowledge Base', icon: 'messages/Question' },
  { text: 'Product Updates', icon: 'common/Ribbon' },
  { header: 'Settings' },
  { text: 'Personal Settings', icon: 'common/User' },
  { text: 'Global Settings', icon: 'common/Settings' },
];

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [SidebarButton, NotificationPill, Typography],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class Sidebar {
  buttons = buttons;
}