import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  items: MenuItem [] = [];

  ngOnit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/']
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: ['/about']
      },
      {
        label: 'Search',
        icon: 'pi pi-fw pi-search',
        routerLink: ['/search']
      }
      // ... more items here
    ];
  }
}
