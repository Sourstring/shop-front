import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ListadoProductosComponent} from './components/listado-productos/listado-productos.component';
import {AgregarProductosComponent} from './components/agregar-productos/agregar-productos.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HomeComponent} from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SidebarModule} from "primeng/sidebar";
import {LoginFormComponent} from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    AgregarProductosComponent,
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    RouterLink,
    RouterTestingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    BrowserAnimationsModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
