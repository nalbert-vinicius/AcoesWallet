import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { historicoService } from 'src/app/services/historicoService';


@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
  providers: [historicoService]
})
export class HistoricoComponent implements OnInit {

  @ViewChild (MatTable) table: MatTable<any>;
  listaOperacao: Operacao[] = [];
  displayedColumns: string[] = ['tag', 'quantidade' , 'quantidadeOperacao','valorTotal','valorPrimeiraOperacao', 'dataInicio', 'dataAtualizacao'];
  dataSource!: MatTableDataSource<Operacao>;
  durationInSeconds = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private historicoService: historicoService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.listarHistorico()
  }

  listarHistorico(){
    this.historicoService.listarHistorico().subscribe((data: any) =>{
      console.log(data);
      this.listaOperacao = data.result;
      this.dataSource = new MatTableDataSource(this.listaOperacao)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() { }

  openSnackBar(data:any) {
    this._snackBar.open(data.msg, "Fechar", {
      duration: 4000
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
