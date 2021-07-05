import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ValidarTokenGuard } from '../guard/validar-token.guard';
import { AcoesComponent } from './acoes/acoes.component';
import { OperacoesComponent } from './operacoes/operacoes.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    canActivate: [ ValidarTokenGuard ],
    children: [
      {path: 'admin', component: DashboardComponent},
      {path: 'acoes', component: AcoesComponent},
      {path: 'operacoes', component: OperacoesComponent},
      {path: '**', redirectTo: 'admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
