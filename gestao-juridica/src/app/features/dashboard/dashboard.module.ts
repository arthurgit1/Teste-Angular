import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    DashboardComponent  // O componente é declarado aqui
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    TableModule
  ]
})
export class DashboardModule { }