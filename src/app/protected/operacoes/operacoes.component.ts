import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  Sigla: string;
  Position: number;
  Tipo: string;
  Quantidade: number;
  Valor: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
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

const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-operacoes',
  templateUrl: './operacoes.component.html',
  styleUrls: ['./operacoes.component.css']
})
export class OperacoesComponent implements AfterViewInit {

  displayedColumns: string[] = ['Position', 'Sigla', 'Tipo', 'Quantidade', 'Valor'];
  dataSource: MatTableDataSource<PeriodicElement>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }
}

