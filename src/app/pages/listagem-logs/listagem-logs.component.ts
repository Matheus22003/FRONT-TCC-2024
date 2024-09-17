import { Component } from '@angular/core';
import { Transaction } from "../../models/transaction";
import { NgClass, NgForOf } from "@angular/common";
import { Router } from "@angular/router";
import { ClienteService } from "../../services/ClienteService"
import { FibraService } from "../../services/FibraService"
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { interval } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-listagem-logs',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './listagem-logs.component.html',
  styleUrl: './listagem-logs.component.scss'
})
export class ListagemLogsComponent implements OnInit, AfterViewInit {
  dadosEncapsulados = 0;
  clientesCadastrados = 0;
  clientesComRedundancia = 0;
  clientePorFibra: any = {}
  transactions: any = [
    { id: 1, date: '2024-09-15', body: '{"item": "A"}' },
    { id: 2, date: '2024-09-14', body: '{"item": "B"}' },
    { id: 3, date: '2024-09-16', body: '{"item": "C"}' },
  ];
  constructor(@Inject(PLATFORM_ID) private platform: object, private router: Router, private clienteService: ClienteService, private fibraService: FibraService) {

  }

  sortDirection = 'asc';
  sortColumn = 'id';

  ngOnInit() {
    this.escutar()

  }

  ngAfterViewInit() {
    console.log(this.clientePorFibra)
  }

  public escutar() {
    // setInterval(()=>{
    this.fibraService.getAllFibras().forEach(fibra => {
      const uniqueTypes = new Set(fibra.response.map(fibra => fibra.tipo));
      this.transactions.tipos = uniqueTypes
      const clientesUnicos = new Set(fibra.response.map(fibra => fibra.cliente?.clienteId));
      this.clientesCadastrados = clientesUnicos.size;
      this.dadosEncapsulados = uniqueTypes.size * fibra.response.length;
      this.clientesComRedundancia = fibra.response.length / this.clientesCadastrados;
    })

    this.fibraService.getAllClientesPorFibra().forEach(fibra => {
      this.clientePorFibra = fibra.response
    })
    // },5000)
  }

  public sortTable(column: keyof Transaction) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }

    this.sortColumn = column;

    // this.transactions.sort((a, b) => {
    //   let comparison = 0;
    //   if (column === 'date') {
    //     const dateA = new Date(a[column]);
    //     const dateB = new Date(b[column]);
    //     comparison = dateA > dateB ? 1 : (dateA < dateB ? -1 : 0);
    //   } else {
    //     if (a[column] > b[column]) {
    //       comparison = 1;
    //     } else if (a[column] < b[column]) {
    //       comparison = -1;
    //     }
    //   }

    //   return this.sortDirection === 'asc' ? comparison : -comparison;
    // });
  }

  public clickOnRow(transaction: Transaction) {
    this.router.navigate(['/view', transaction.id]);
  }
}
