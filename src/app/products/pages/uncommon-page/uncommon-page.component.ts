import { Component } from '@angular/core';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  //il8nSelect
  public name: string = 'Louis';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'he',
    female: 'she',
  };

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //il8nPlural
  public clients: string[] = [
    'Maria',
    'Christine',
    'Anthony',
    'Rashel',
    'Jean',
  ];
  public clientsMap = {
    '=1': '1 client',
    other: '# clients',
  };

  deleteClient(): void {
    this.clients.shift();
  }
}
