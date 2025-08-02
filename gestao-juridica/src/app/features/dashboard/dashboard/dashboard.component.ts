// src/app/features/dashboard/dashboard.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']})

export class DashboardComponent implements OnInit {

  // ... o restante do seu código aqui
  totalPartesInteressadas = 0;
  totalProcessosDataJud = 0;
  ultimosProcessos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // ... sua lógica de inicialização
  }
}