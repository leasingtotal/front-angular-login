import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: UsuarioModel = new UsuarioModel();
  recordar = false;

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('usuario')) {
      this.usuario.usuario = localStorage.getItem('usuario');
      this.recordar = true;
    }
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }
    Swal.fire({
      title: 'LogIn',
      text: 'Espere por favor...',
      allowOutsideClick: false,
      icon: 'success',
    });

    Swal.showLoading();

    this.service.login(this.usuario).subscribe((resp) => {
      console.log(resp);
      Swal.close();
      if (resp[0].status === '200' && this.recordar) {
        localStorage.setItem('usuario', resp[0].usuario);
      }
      this.router.navigateByUrl('/home');
      if (resp[0].status === '400') {
        Swal.fire({
          title: 'Error al autenticar',
          text: 'Datos no encontrados',
          icon: 'error',
        });
      }
    });
  }
}
