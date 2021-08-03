import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { usuariosService } from '../../services/usuarioService';
import { Usuarios } from 'src/model/usuario-model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [usuariosService]
})
export class UsuarioComponent implements OnInit {
  msg: any;
  user: any;
  formularioAtualizar: FormGroup = this.fb.group({
    nome: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    senha: ['',[Validators.required, Validators.minLength(6)]]
  })

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public usuariosService: usuariosService) { }

  ngOnInit() {
    this.getUser()
    console.log(this.user)
  }

  atualizar(){
    var usuario: Usuarios = new Usuarios(
      this.formularioAtualizar.value.nome,
      this.formularioAtualizar.value.email,
      this.formularioAtualizar.value.senha
    );
    this.usuariosService.updateUsuario(usuario).then((data: any) =>{
      //this.route.navigateByUrl('/auth', {skipLocationChange: true});
      this.route.navigate(['/auth'], {queryParams: {id: this.msg}});
    }).catch(error =>{
      this.msg = error.error.msg;
      //Swal.fire('Error', error.error.msg, 'error');
    });
  }

  getUser(){
    this.usuariosService.getUser().then( data =>{
      this.user = data.result;
    });
  }

}
