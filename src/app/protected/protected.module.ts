import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { ProtectedRoutingModule } from './protected-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AcoesComponent } from './acoes/acoes.component';
import { OperacoesComponent } from './operacoes/operacoes.component';
import { ElementDialogComponent } from './acoes/element-dialog/element-dialog.component';
import { ElementDialogAdicionarEditarComponent } from './acoes/element-dialog-adicionar-editar/element-dialog-adicionar-editar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    AcoesComponent,
    OperacoesComponent,
    ElementDialogComponent,
    ElementDialogAdicionarEditarComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
  ]
})
export class ProtectedModule { }
