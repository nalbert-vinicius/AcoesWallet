import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Operacao } from 'src/app/auth/interfaces/interfaces';

@Component({
  selector: 'app-element-dialog-adicionar-editar',
  templateUrl: './element-dialog-adicionar-editar.component.html',
  styleUrls: ['./element-dialog-adicionar-editar.component.css']
})
export class ElementDialogAdicionarEditarComponent implements OnInit {

  operacoesAcao!: Operacao;

  constructor(
    public dialogRef: MatDialogRef<ElementDialogAdicionarEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Operacao,) {
      console.log("teste", data);
    }

  async sair(data: any) {
    console.log("sair", data);
    this.dialogRef.close(data);
  }

  async salvar(data: any) {
    console.log("operacao", data);
    this.dialogRef.close(data);
  }

  

  ngOnInit(){
    
  }

}
