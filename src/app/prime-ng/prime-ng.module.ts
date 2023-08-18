import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

// Es aconsejable generar un modulo específico para PrimeNG en el que getionar todas las exportaciones de PrimeNG y mejorar la legibilidad del código.

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MenuModule, MenubarModule],
})
export class PrimeNgModule {}
