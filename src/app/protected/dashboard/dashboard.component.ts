import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesHorizontal } from '@swimlane/ngx-charts';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { dashBoardService } from 'src/app/services/dashboardService';
import { operacaoService } from 'src/app/services/operacaoService';
import { Moment } from 'moment';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [dashBoardService, operacaoService]
})
export class DashboardComponent implements OnInit {

  acoes: any[];
  valDiario: any;
  productSales: any[];
  productSalesMulti: any[];
  listaAcoes: any[];
  view: any[] = [400, 200];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'weight'];

  get usuario(){
    return this.AuthService.usuario;
  }

  constructor(
    private route: Router,
    private AuthService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private dashBoardService: dashBoardService,
    private operacaoService: operacaoService
  ) { }

  logout(){
    this.AuthService.logout();
    this.route.navigateByUrl('/auth');
  }

  ngOnInit(): void {
    this.dashBoardService.listarAcao().subscribe((data:any) =>{
      this.acoes = data.obj;
    })
    this.listarAcoes();
  }

  async listarAcoes(){
    await this.operacaoService.listarOperacao().subscribe((data: any) =>{
      this.dataSource = data.result;
      for (let i = 0; i < data.result.length; i++) {
        var t = this.valorDiario(data.result[i].tag);
      }
    });
  }

  getLucroPerda(n1, n2){
    var result = n1-n2;
    if(result <=0){
      return "Você está perdendo R$"+result;
    }else{
      return "Você está Lucrando R$"+result;
    }
  }

  
  async valorDiario(acao){
    var dataa = (moment(new Date()).format("YYYY-MM-DD"));
    await this.dashBoardService.listarValor(acao).subscribe((data: any) =>{
      console.log(data)
      this.valDiario = { 
        "name": data["Meta Data"]["2. Symbol"],
        "value": data["Time Series (Daily)"][dataa]["4. close"]
      }
    })
  }


  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }
}
