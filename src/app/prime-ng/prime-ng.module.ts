import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';

// Es aconsejable generar un modulo específico para PrimeNG en el que getionar todas las exportaciones de PrimeNG y mejorar la legibilidad del código.

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MenuModule],
})
export class PrimeNgModule {}
