import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AgregarProductosComponent } from './components/agregar-productos/agregar-productos.component';
import {RouterTestingModule} from "@angular/router/testing";

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    AgregarProductosComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    RouterLink,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
