import {Component} from '@angular/core';
import {Transaction} from "../../models/transaction";
import {NgClass, NgForOf} from "@angular/common";
import {Router} from "@angular/router";

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
export class ListagemLogsComponent {

  constructor(private router: Router) {
  }


  transactions = [
    {id: 1, date: '2024-09-15', body: '{"item": "A"}'},
    {id: 2, date: '2024-09-14', body: '{"item": "B"}'},
    {id: 3, date: '2024-09-16', body: '{"item": "C"}'},
  ];

  sortDirection = 'asc';
  sortColumn = 'id';

  public sortTable(column: keyof Transaction) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }

    this.sortColumn = column;

    this.transactions.sort((a, b) => {
      let comparison = 0;
      if (column === 'date') {
        const dateA = new Date(a[column]);
        const dateB = new Date(b[column]);
        comparison = dateA > dateB ? 1 : (dateA < dateB ? -1 : 0);
      } else {
        if (a[column] > b[column]) {
          comparison = 1;
        } else if (a[column] < b[column]) {
          comparison = -1;
        }
      }

      return this.sortDirection === 'asc' ? comparison : -comparison;
    });
  }

  public clickOnRow(transaction: Transaction) {
    this.router.navigate(['/view', transaction.id]);
  }
}
