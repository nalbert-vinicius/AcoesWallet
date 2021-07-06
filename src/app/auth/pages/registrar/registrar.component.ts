import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from 'src/model/usuario-model';
import { usuariosService } from '../../services/usuarioService';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  providers: [usuariosService],
  styles: [  ]
})
export class RegistrarComponent{
  
  msg: any;

  formularioCadastro: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public usuariosService: usuariosService) { }

  cadastrar(){
    var usuario: Usuarios = new Usuarios(
      this.formularioCadastro.value.nome,
      this.formularioCadastro.value.email,
      this.formularioCadastro.value.senha
    );
    this.usuariosService.cadastrarUsuarios(usuario).then((data: any) =>{
      //this.route.navigateByUrl('/auth', {skipLocationChange: true});
      this.msg = "1";
      this.route.navigate(['/auth'], {queryParams: {id: this.msg}});
    }).catch(error =>{
      this.msg = error.error.msg;
      //Swal.fire('Error', error.error.msg, 'error');
    });

    
  } 
  
}
