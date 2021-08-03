import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { dashBoardService } from 'src/app/services/dashboardService';
import { operacaoService } from 'src/app/services/operacaoService';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [dashBoardService, operacaoService]
})
export class DashboardComponent implements OnInit {
  vetor: any[] = [];
  acoes: any[];
  valDiario: any;
  listaAcoes: any[];
  view: any[] = [400, 200];

  showLegend: boolean = true;
  showLabels: boolean = true;

  gradient: boolean = false;
  isDoughnut: boolean = true;

  legendPosition: string = 'below';
  dataSource: any;
  colorScheme = {
    domain: ['#704FC4', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F']
  };
  displayedColumns: string[] = ['position', 'name', 'weight'];  
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  showYAxisLabel = true;

  constructor(
    private route: Router,
    private AuthService: AuthService,
    private dashBoardService: dashBoardService,
    private operacaoService: operacaoService,
  ) { }

  logout(){
    this.AuthService.logout();
    this.route.navigateByUrl('/auth');
  }

  ngOnInit(): void {
    this.dashboard();
    this.listarAcoes();
  }

  dashboard(){
    this.dashBoardService.listarAcao().subscribe((data:any) =>{
      this.acoes = data.obj;
    })
  }

  async listarAcoes(){
    await this.operacaoService.listarOperacao().subscribe((data: any) =>{
      this.dataSource = data.result;
      for (let i = 0; i < data.result.length; i++) {
       this.valorDiario(data.result[i].tag);
      }
    });
  }

  async valorDiario(acao){
    var dataAtual = (moment(new Date()));
    if(this.ehDiaUtil(dataAtual)){
      if(moment(new Date()).weekday(1).isAfter(moment(new Date()).format("YYYY-MM-DD"))){
        dataAtual.subtract(3, "days")
      }else{
        dataAtual.subtract(1, "days");
      }
    }else{
      dataAtual.subtract(2,"days");
    }

    await this.dashBoardService.listarValor(acao).subscribe((data: any) =>{
      var tag = data["Meta Data"]["2. Symbol"];
      tag = tag.replace(".SAO", "")
      this.valDiario = { 
        "nome": tag,
        "abertura": data["Time Series (Daily)"][dataAtual.format("YYYY-MM-DD")]["1. open"],
        "maxima": data["Time Series (Daily)"][dataAtual.format("YYYY-MM-DD")]["2. high"],
        "minima": data["Time Series (Daily)"][dataAtual.format("YYYY-MM-DD")]["3. low"],
        "fechamento": data["Time Series (Daily)"][dataAtual.format("YYYY-MM-DD")]["4. close"],
        "volume": data["Time Series (Daily)"][dataAtual.format("YYYY-MM-DD")]["5. volume"]
      }
      this.vetor.push(this.valDiario);
    })
  }

  getLucroPerda(n1, n2){
    if(n1 == undefined){
      return "R$ "+0;
    }

    if(n2 == undefined){
      return "R$ "+0
    }else{
      var result = n1-n2;
      return "R$ "+result
    }
  }

  ehDiaUtil(date){
      const givenDate = moment(date)
      if (!givenDate.isValid()) {
        return false
      }
    
      if (this.ehFinalDeSemana(givenDate)) {
        return false
      }    
      return true
  }

  ehFinalDeSemana(givenDate){
    const dayOfWeek = givenDate.day()
    const isWeekend = (dayOfWeek === 6 || dayOfWeek === 0)
    return isWeekend
  }

  get usuario(){
    return this.AuthService.usuario;
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
