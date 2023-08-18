import { Component } from '@angular/core';

@Component({
  selector: 'products-numbers-page',
  templateUrl: './numbers-page.component.html',
})
export class NumbersPageComponent {
  public totalSells: number = 4234559.5567;
  public percent: number = 0.412;
}
