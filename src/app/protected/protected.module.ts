import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ProtectedRoutingModule } from './protected-routing.module';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { AcoesComponent } from './acoes/acoes.component';
import { OperacoesComponent } from './operacoes/operacoes.component';


@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    AcoesComponent,
    OperacoesComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule
  ]
})
export class ProtectedModule { }
