import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SharedComponent } from './components/shared/shared.component';
import { TablasComponent } from './components/tablas/tablas.component';
import { FechasComponent } from './components/fechas/fechas.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { FooterComponent } from './components/footer/footer.component';
import { PruebaComponent } from './components/prueba/prueba.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    SharedComponent,
    TablasComponent,
    FechasComponent,
    BusquedaComponent,
    FooterComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
