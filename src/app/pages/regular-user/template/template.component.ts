import { Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent, SidebarItems } from "../../../common/sidebar/sidebar.component";
import { HeaderNavigationComponent } from "../components/header-navigation/header-navigation.component";

@Component({
  selector: 'app-template',
  imports: [RouterOutlet, SidebarComponent, HeaderNavigationComponent],
  standalone: true,
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {
  links: SidebarItems[] = []
  isSidebarOpen: WritableSignal<boolean> = signal(true);

  constructor(){
    this.initItems()
  }

  onSidebarToggled(isOpen: boolean) {
    this.isSidebarOpen.set(isOpen)
  }

  toggleSidebar() {
    this.isSidebarOpen.update(open => !open)
  }

  initItems() {
    this.links = [
      { name: 'News Feed', icon: '', type: 'link', routerLink: '', active_exact: true },
      {name: 'Message', icon: '', type: 'link', routerLink: '/conversations', active_exact: true},
      {name: 'Forums', icon:'', type: 'link', routerLink: '/forums', active_exact: true},
      {name: 'Media', icon: '', type: 'link', routerLink: '/medias', active_exact: true},
      {name: 'Settings', icon: '', type: 'link_group', active_exact: true,
        items: [
          { name: 'Profile', icon: '', type: 'link', routerLink: '/profile', active_exact: true },
          {name: 'Logout', icon: '', type:'link', routerLink: '/logout', active_exact:true}
        ]
      },
    ]
  }
}
