import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts and dates',
            icon: 'pi pi-align-left',
            routerLink: ['/products'],
          },
          {
            label: 'Numbers',
            icon: 'pi pi-dollar',
            routerLink: ['/products/numbers'],
          },
          {
            label: 'Uncommons',
            icon: 'pi pi-globe',
            routerLink: ['/products/uncommon'],
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Other element',
            icon: 'pi pi-cog',
            items: [{ label: 'Sub-element', icon: 'pi pi-cog' }],
          },
        ],
      },
    ];
  }
}
