import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { ValidarTokenGuard } from '../guard/validar-token.guard';
import { AcoesComponent } from './acoes/acoes.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ],
    children: [
      {path: 'admin', component: DashboardComponent},
      {path: 'acoes', component: AcoesComponent},
      {path: 'historico', component: HistoricoComponent},
      {path: '**', redirectTo: 'admin'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
