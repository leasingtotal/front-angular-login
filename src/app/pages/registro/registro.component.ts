import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  usuario: UsuarioModel;

  constructor( private service: AuthService ) { }

  ngOnInit(): void {
    this.usuario = new UsuarioModel();
    this.usuario.mail = 'sakudacastro@gmail.com';

  }
  onRegistro(form: NgForm){

    if (form.invalid) {return; }

    // console.log('formulario enviado');
    // console.log(this.usuario);
    // console.log(form);

    this.service.nuevoUsuario(this.usuario)
    .subscribe(resp => {
      console.log(resp);
    });
  }

}
