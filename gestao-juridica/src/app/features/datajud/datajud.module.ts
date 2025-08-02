import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatajudRoutingModule } from './datajud-routing.module';
import { ProcessosDatajudComponent } from './pages/processos-datajud/processos-datajud.component';


@NgModule({
  declarations: [
    ProcessosDatajudComponent
  ],
  imports: [
    CommonModule,
    DatajudRoutingModule
  ]
})
export class DatajudModule { }
