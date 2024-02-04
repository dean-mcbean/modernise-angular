import { Component, Input } from '@angular/core';
import { Typography } from '../typography/typography.component';
import { Icon } from '../icon/icon.component';
import { NotificationPill } from '../notificationPill/notificationPill.component';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [Typography, Icon, NotificationPill],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.sass']
})
export class Dropdown {
  @Input() label: string = 'Dropdown';
  @Input() items: string[] = [];
  @Input() isOpen: boolean = false;

  constructor() {
    window.addEventListener('click', (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.dropdown')) {
        this.closeDropdown();
      }
    })
  }

  public toggleDropdown() {
    console.log("RUN")
    this.isOpen = !this.isOpen;
  }
  
  public closeDropdown() {
    this.isOpen = false;
  }
  
  public addItem(item: string) {
    this.items.push(item);
  }
  
  public removeItem(index: number) {
    this.items.splice(index, 1);
  }
  
  public clearItems() {
    this.items = [];
  }
  
  public getItems() {
    return this.items;
  }
}