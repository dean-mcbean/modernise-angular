import { Component } from '@angular/core';
import { SidebarButton } from './sidebarButton/sidebarButton.component';
import { NotificationPill } from '../../atoms/notificationPill/notificationPill.component';
import { Typography } from '../../atoms/typography/typography.component';

const buttons = [
  { text: 'Dashboard', icon: 'fa fa-tachometer', active: true },
  { text: 'Orders', icon: 'fa fa-briefcase', notifications: 16},
  { text: 'Products', icon: 'fa fa-tasks' },
  { text: 'Categories', icon: 'fa fa-calendar' },
  { text: 'Customers', icon: 'fa fa-envelope' },
  { text: 'Reports', icon: 'fa fa-cog' },
  { text: 'Coupons', icon: 'fa fa-envelope' },
  { text: 'Index', icon: 'fa fa-envelope' },
  { header: 'Other Information' },
  { text: 'Knowledge Base', icon: 'fa fa-envelope' },
  { text: 'Product Updates', icon: 'fa fa-envelope' },
  { header: 'Settings' },
  { text: 'Personal Settings', icon: 'fa fa-envelope' },
  { text: 'Global Settings', icon: 'fa fa-envelope' },
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