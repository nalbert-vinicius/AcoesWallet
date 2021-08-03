import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AcoesComponent } from './acoes/acoes.component';
import { ElementDialogComponent } from './acoes/element-dialog/element-dialog.component';
import { ElementDialogAdicionarEditarComponent } from './acoes/element-dialog-adicionar-editar/element-dialog-adicionar-editar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HistoricoComponent } from './historico/historico.component';
import { ElementDialogTableComponent } from './acoes/element-dialog-table/element-dialog-table.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    AcoesComponent,
    ElementDialogComponent,
    ElementDialogAdicionarEditarComponent,
    HistoricoComponent,
    ElementDialogTableComponent,
    UsuarioComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    NgxChartsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProtectedModule { }
