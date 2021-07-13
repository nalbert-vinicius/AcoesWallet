import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Operacao } from 'src/app/auth/interfaces/interfaces';
import { operacaoService } from 'src/app/services/operacaoService';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElementDialogComponent } from './element-dialog/element-dialog.component';
import { ElementDialogAdicionarEditarComponent } from './element-dialog-adicionar-editar/element-dialog-adicionar-editar.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  providers: [operacaoService],
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent implements OnInit {

  @ViewChild (MatTable) table: MatTable<any>;
  listaOperacao: Operacao[] = [];
  displayedColumns: string[] = ['tag', 'quantidade' ,'valorUnitario', 'tipoOperacao', 'dataInicio', 'acoes'];
  dataSource!: MatTableDataSource<Operacao>;
  durationInSeconds = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(
    private operacaoService: operacaoService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.listarOperacao()
  }

  listarOperacao(){
    this.operacaoService.listarOperacao().subscribe((data: any) =>{
      this.listaOperacao = data.result;
      this.dataSource = new MatTableDataSource(this.listaOperacao)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() { }

  openSnackBar(data:any) {
    this._snackBar.open(data.msg, "Fechar");
  }
  
  async excluirOperacao(id: any){
    var retorno = await this.operacaoService.deletarOperacao(id);
    this.openSnackBar(retorno)
    this.ngOnInit();
  }

  deletarOperacao(operacao: Operacao): void{
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
      if (result !== undefined) {
         if (result._id == undefined) {
          this.operacaoService.criarOperacao(result)
              .subscribe(
          (data: Operacao) => {
                // falta mostrar a mensagem de sucesso
                console.log(data);
                this.openSnackBar(data)
                this.ngOnInit();
          },
          (err) => {
            // falta mostrar a mensagem de erro
            console.log(err);
            this.ngOnInit();
          });
          //this.table.renderRows();
          
        } else {
              this.operacaoService.editarOperacao(result._id,result)
              .subscribe(
                (data: Operacao) => {
                      // falta mostrar a mensagem de sucesso
                      console.log(data);
                      this.openSnackBar(data)
                      this.ngOnInit();
                },
                (err) => {
                  // falta mostrar a mensagem de erro
                  console.log(err);
                  this.ngOnInit();
                }
              );
        }
        
      }
    });
  }

  editarOperacao(element: Operacao): void{
    this.criarOperacao(element);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}