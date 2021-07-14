import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isExpanded: boolean = false;

  constructor( 
    private route: Router,
    private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  
  get usuario(){
    return this.AuthService.usuario;
  }

  logout(){
    this.AuthService.logout();
    this.route.navigateByUrl('/auth');
  }

}
