import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartesInteressadasRoutingModule } from './partes-interessadas-routing.module';
import { PartesInteressadasListagemComponent } from './pages/partes-interessadas-listagem/partes-interessadas-listagem.component';
import { PartesInteressadasFormComponent } from './pages/partes-interessadas-form/partes-interessadas-form.component';


@NgModule({
  declarations: [
    PartesInteressadasListagemComponent,
    PartesInteressadasFormComponent
  ],
  imports: [
    CommonModule,
    PartesInteressadasRoutingModule
  ]
})
export class PartesInteressadasModule { }
