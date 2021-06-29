import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  formulario: FormGroup = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(6)]]
  })
  constructor(
    private fb: FormBuilder,
    private route: Router 
  ) { }

  login(){
    console.log(this.formulario.value);
    this.route.navigateByUrl('/dashboard');
  }
  

}
