import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Operacao } from 'src/app/auth/interfaces/interfaces';

const LISTA_ACOES: Operacao[] = [
  {Position: 1,  Sigla : 'Hydrogen', Tipo: 'SwingTrade', Quantidade: 100, Valor: 22    },
  {Position: 2,  Sigla : 'Helium', Tipo: 'SwingTrade', Quantidade: 100,    Valor: 22   },
  {Position: 3,  Sigla : 'Lithium', Tipo: 'SwingTrade', Quantidade: 100,    Valor: 22   },
  {Position: 4,  Sigla : 'Beryllium', Tipo: 'SwingTrade', Quantidade: 100, Valor: 22   },
  {Position: 5,  Sigla : 'Boron', Tipo: 'SwingTrade', Quantidade: 100,    Valor: 22    },
  {Position: 6,  Sigla : 'Carbon', Tipo: 'SwingTrade', Quantidade: 100,   Valor: 22   },
  {Position: 7,  Sigla : 'Nitrogen', Tipo: 'SwingTrade', Quantidade: 100, Valor: 22   },
  {Position: 8,  Sigla : 'Oxygen', Tipo: 'SwingTrade', Quantidade: 100,   Valor: 22   },
  {Position: 9,  Sigla : 'Fluorine', Tipo: 'SwingTrade', Quantidade: 100, Valor: 22   },
  {Position: 10, Sigla : 'Neon', Tipo: 'SwingTrade', Quantidade: 100,     Valor: 22   },
  {Position: 11, Sigla : 'Neon', Tipo: 'SwingTrade', Quantidade: 100,     Valor: 22   }
];

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent implements OnInit {

  displayedColumns: string[] = ['Position', 'Sigla', 'Tipo', 'Quantidade', 'Valor', 'açoes'];
  dataSource = new MatTableDataSource(LISTA_ACOES);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
