import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

private url = 'http://10.50.1.137:3434';
userToken: string;

  constructor( private http: HttpClient) {
        this.leerToken();
  }

  logout(){

    localStorage.removeItem('key');

  }

  login( user: UsuarioModel ){

    const authLogin = {
      usuario: user.usuario,
      clave: user.password
    };

    return this.http.post(`${this.url}/login`, authLogin).pipe(
      map(resp => {
        this.guardarDatos(resp[0]['clave']);
        return resp;
      })
    );
  }

  nuevoUsuario( user: UsuarioModel ){

    const authDataRegistro = {

      usuario: user.usuario,
      nombre: user.nombre,
      clave: user.password,
      email: user.mail
    };
    console.log(authDataRegistro);
    return this.http.put(`${this.url}/registro`, 
    authDataRegistro).pipe(
      map(resp => {
        this.guardarDatos(resp[0]['clave']);
        return resp;
      })
    );
  }

private guardarDatos(clave: string){
  this.userToken = clave;
  localStorage.setItem('key', clave);
}

leerToken(){

  if (localStorage.getItem('token')) {
    this.userToken = localStorage.getItem('token');
  }else{
    this.userToken = '';
  }

}

estaLogueado() : boolean {
  console.log(this.userToken);
  return this.userToken.length > 2;
}

}
