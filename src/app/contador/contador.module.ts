import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContadorComponent } from './contador/contador.component';



@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [ //para usar el componente fuera del modulo tambien se debe exportar
    ContadorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContadorModule { }
