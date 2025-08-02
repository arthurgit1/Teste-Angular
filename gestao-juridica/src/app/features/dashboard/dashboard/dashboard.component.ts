import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  // NENHUMA LINHA 'standalone: true,' AQUI!
  // NENHUMA LINHA 'imports: [...]' AQUI!
})
export class DashboardComponent implements OnInit {

  totalPartesInteressadas = 0;
  totalProcessosDataJud = 0;
  ultimosProcessos: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Aqui você chamaria os serviços para buscar os dados
    // Por enquanto, vamos usar dados mockados para o exemplo
    this.totalPartesInteressadas = 150;
    this.totalProcessosDataJud = 320;
    this.ultimosProcessos = [
      { id: 1, numero: '1234567-89.2023.8.26.0000', tribunal: 'TJSP', assunto: 'Divórcio' },
      { id: 2, numero: '9876543-21.2023.8.19.0000', tribunal: 'TJRJ', assunto: 'Indenização' },
      { id: 3, numero: '5555555-44.2023.8.06.0000', tribunal: 'TJCE', assunto: 'Inventário' },
      { id: 4, numero: '1112223-33.2023.8.18.0000', tribunal: 'TJPI', assunto: 'Usucapião' },
      { id: 5, numero: '9988776-55.2023.8.26.0000', tribunal: 'TJSP', assunto: 'Execução Fiscal' },
    ];
  }

}