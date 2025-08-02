import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
// Verifique se o caminho de importação está correto (./dashboard/dashboard.component)
import { DashboardComponent } from './dashboard/dashboard.component';

import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    DashboardComponent 
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CardModule,
    TableModule
  ]
})
export class DashboardModule { }