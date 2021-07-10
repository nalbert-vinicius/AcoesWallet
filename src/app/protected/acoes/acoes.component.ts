import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { operacaoService } from 'src/app/services/operacaoService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElementDialogComponent } from './element-dialog/element-dialog.component';
import { ElementDialogAdicionarEditarComponent } from './element-dialog-adicionar-editar/element-dialog-adicionar-editar.component';


@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  providers: [operacaoService],
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent implements OnInit {

  listaOperacao: Operacao[] = [];
  displayedColumns: string[] = ['tag', 'quantidade' ,'valorUnitario', 'tipoOperacao', 'dataInicio', 'acoes'];
  dataSource!:MatTableDataSource<Operacao>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private operacaoService: operacaoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.listarOperacao()
  }

  listarOperacao(){
    this.operacaoService.listarOperacao().then((data: any) =>{
      this.listaOperacao = data.result;
      this.dataSource = new MatTableDataSource(this.listaOperacao)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    
  }
  
  async excluirOperacao(id: any){
    await this.operacaoService.deletarOperacao(id);
    this.ngOnInit();
  }

  openOperacao(operacao: Operacao): void{
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      width: '250px',
      data: operacao
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.excluirOperacao(result);
      }
    });
  }

  criarOperacao(element: Operacao | null): void{
    const dialogRef = this.dialog.open(ElementDialogAdicionarEditarComponent, {
      width: '250px',
      data: element == null ? {
        dataInicio: null,
        quantidade: null,
        tag: null,
        tipoOperacao: null,
        valorUnitario: null
      } : element
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("result", result);
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

