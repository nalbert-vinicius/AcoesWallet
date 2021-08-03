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
  isChange: boolean;
  option: any[] = [
    {value: 'Compra'},
    {value: 'Venda'},
  ];

  constructor(
    public dialogRef: MatDialogRef<ElementDialogAdicionarEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Operacao,) {

    }

  async sair(data: any) {
    this.dialogRef.close(data);
  }

  async salvar(data: any) {
    this.dialogRef.close(data);
  }

  

  ngOnInit(): void{
    if (this.data.tag != null) {
      this.isChange = true;
    } else {
      this.isChange = false;
    }
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
