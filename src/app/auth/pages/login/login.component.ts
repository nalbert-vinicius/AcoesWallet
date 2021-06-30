import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  formulario: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(2)]]
  })
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private AuthService: AuthService
  ) { }

  login(){
    const {email, senha} = this.formulario.value;
    this.AuthService.login(email, senha).subscribe( ok =>{
      if(ok == true){
        this.route.navigateByUrl('/dashboard');
      }else{
        Swal.fire('Error', ok, 'error');
      }
    })
  }
  

}
