import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { productSales ,productSalesMulti } from './product';
import { dashBoardService } from 'src/app/services/dashboardService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [dashBoardService]
})
export class DashboardComponent implements OnInit{

  get usuario(){
    return this.AuthService.usuario;
  }

  constructor(
    private route: Router,
    private AuthService: AuthService,
    private breakpointObserver: BreakpointObserver,
    private dashBoardService: dashBoardService
  ) {
    Object.assign(this, { productSales, productSalesMulti });
   }


  logout(){
    this.AuthService.logout();
    this.route.navigateByUrl('/auth');
  }
  acoes: any[];
  productSales: any[];
  productSalesMulti: any[];

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

  ngOnInit(): void {
    console.log("SALES", productSales)
    this.dashBoardService.listarAcao().subscribe((data:any) =>{
      this.acoes = data.obj;
      console.log(this.acoes)
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
