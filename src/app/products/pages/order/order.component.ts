import { Component } from '@angular/core';
import { Artist, Style } from '../../interfaces/artist';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public artists: Artist[] = [
    {
      name: 'Louise Bourgeois',
      country: 'french',
      time: '1911-2010',
      style: Style.sculptor,
      isAlive: false,
    },
    {
      name: "Georgia O'Keeffe",
      country: 'american',
      time: '1887-1986',
      style: Style.modernism,
      isAlive: false,
    },
    {
      name: 'Élisabeth Louise Vigée Le Brun',
      country: 'French',
      time: '1755–1842',
      style: Style.impressionism,
      isAlive: false,
    },
    {
      name: 'Mary Cassatt',
      country: 'american',
      time: '1844–1926',
      style: Style.impressionism,
      isAlive: false,
    },
    {
      name: 'Hilma af Klint',
      country: 'Swedish',
      time: '1862-1944',
      style: Style.abstract,
      isAlive: false,
    },
    {
      name: 'Agnes Martin',
      country: 'Canadian',
      time: '1912-2004',
      style: Style.minimal,
      isAlive: false,
    },
    {
      name: 'Yayoi Kusama',
      country: 'Japanese',
      time: '1929',
      style: Style.performance,
      isAlive: true,
    },
  ];

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
