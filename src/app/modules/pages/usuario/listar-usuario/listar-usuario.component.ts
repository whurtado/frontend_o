import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { Usuario } from "../../../models/usuario";
import { LoginService } from '../../../services/auth/login.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {

  usuario:  Usuario  = {
    id:  null ,
    nombre:null,
    email:null,
    password:null,
    sede:'',
  };

   usuarios:any = [];
   p: number = 1;
   arraySedes:any = [];

  constructor( public _usuarioService: UsuarioService,
               public _loginService:LoginService,) { }

  ngOnInit() {
    this.traerSedes();
    this.listarTodosLosUsuarios(this.usuario);
  }

  listarTodosLosUsuarios(usuario) {

    this._usuarioService.listarTodosLosUsuarios(usuario).subscribe(response => { 
      this.usuarios = response.user;
      console.log("respuesta", response);
      console.log("usus", this.usuarios);

      },
      error =>{
        console.log("error--------------",error);
      });
  }

   traerSedes() {
    this._loginService.listarTodasLasSedes().subscribe(response => {
          
      this.arraySedes = response.sede;

    });
  }
}
