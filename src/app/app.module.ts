import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import {RouterTestingModule} from "@angular/router/testing";
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    AgregarProductosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    RouterLink,
    RouterTestingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
