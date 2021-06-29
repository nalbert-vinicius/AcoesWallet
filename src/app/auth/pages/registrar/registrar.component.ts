import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styles: [
  ]
})
export class RegistrarComponent{

  formularioCadastro: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private route: Router ) { }

  cadastrar(){
    console.log(this.formularioCadastro.value);
    this.route.navigateByUrl('/dashboard');
  } 
  
}
