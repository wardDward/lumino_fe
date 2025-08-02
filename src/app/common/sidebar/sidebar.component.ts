import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  items = input<SidebarItems[]>([])
  isOpen = input<boolean>(true)
  toggled = output<boolean>()
  openGroups = input<{[key: number]: boolean}>({})


  toggleGroup(index: number){
    this.openGroups()[index] = !this.openGroups()[index]
  }
  isGroupOpen(index: number){
    return this.openGroups()[index] ?? false
  }

  toggleSidebar() {
    this.toggled.emit(!this.isOpen)
  }
  
}

export interface SidebarItems{
  name: string;
  icon?: string;
  routerLink?: string;
  type: 'link' | 'link_group';
  items?: SidebarItems[];
  active_exact: boolean;
}