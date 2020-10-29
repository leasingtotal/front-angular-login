import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { FechasComponent } from './components/fechas/fechas.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

const routes: Routes = [

{ path: 'home', component: HomeComponent, canActivate: [ AuthGuard ]},
{ path: 'login', component: LoginComponent},
{ path: 'registro', component: RegistroComponent},
{ path: 'tablas', component: TablasComponent},
{ path: 'fechas', component: FechasComponent},
{ path: 'busqueda', component: BusquedaComponent},
{ path: '**', redirectTo: 'registro' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
