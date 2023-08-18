import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
})
export class BasicsPageComponent {
  public nameLower: string = 'antonio';
  public nameUpper: string = 'ANTONIO';
  public fullName: string = 'AntoNIo';

  public customDate: Date = new Date();
}
