import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      * {
        margin: 15px;
      }
    `
  ]
})
export class DashboardComponent {

  get usuario(){
    return this.AuthService.usuario;
  }

  constructor(
    private route: Router,
    private AuthService: AuthService
  ) { }


  logout(){
    this.AuthService.logout();
    this.route.navigateByUrl('/auth');
  }

}
