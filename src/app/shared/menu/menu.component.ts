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
      { label: 'New', icon: 'pi pi-plus' },
      { label: 'Open', icon: 'pi pi-download' },
      { label: 'Undo', icon: 'pi pi-undo' },
    ];
  }
}
