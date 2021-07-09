import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})

export class LoginComponent implements OnInit{

  mensagem: any;

  formulario: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(2)]]
  })
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private AuthService: AuthService,
    private routeParam: ActivatedRoute
  ) { }

  ngOnInit(){
   this.mensagem = this.routeParam.snapshot.queryParamMap.get('id');
   if(this.mensagem == 1){
    this.mensagem = "Usuário cadastrado com sucesso!";
   }
  }

  login(){
    const {email, senha} = this.formulario.value;
    this.AuthService.login(email, senha).subscribe( ok =>{
      if(ok == true){
        this.route.navigateByUrl('/dashboard');
      }else{
        this.mensagem = ok;
      }
    })
  }
  

}
