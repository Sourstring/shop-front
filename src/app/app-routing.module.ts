import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from "@angular/router";
import {ListadoProductosComponent} from "./components/listado-productos/listado-productos.component";
import {AgregarProductosComponent} from "./components/agregar-productos/agregar-productos.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: 'listado' , component: ListadoProductosComponent},
  {path: 'agregar', component: AgregarProductosComponent},
  {path: '', component:  AppComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
