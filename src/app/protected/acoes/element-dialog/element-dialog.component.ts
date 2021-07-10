import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Operacao } from 'src/app/auth/interfaces/interfaces';

@Component({
  selector: 'app-element-dialog',
  templateUrl: './element-dialog.component.html',
  styleUrls: ['./element-dialog.component.css']
})
export class ElementDialogComponent implements OnInit {

  operacoesAcao!: Operacao;

  constructor(
    public dialogRef: MatDialogRef<ElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Operacao,) {
      
    }

  async excluirAcao(data: any) {
    this.dialogRef.close(data);
  }

  ngOnInit(){
    
  }

}
