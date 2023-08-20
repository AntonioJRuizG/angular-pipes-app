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
            routerLink: [''],
          },
          {
            label: 'Numeric',
            icon: 'pi pi-dollar',
            routerLink: ['numbers'],
          },
          {
            label: 'Uncommon',
            icon: 'pi pi-globe',
            routerLink: ['uncommon'],
          },
        ],
      },
      {
        label: 'Custom pipes',
        icon: 'pi pi-cog',
        routerLink: 'custom',
      },
    ];
  }
}
