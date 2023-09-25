import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ListadoProductosComponent} from "./components/listado-productos/listado-productos.component";
import {AgregarProductosComponent} from "./components/agregar-productos/agregar-productos.component";
import {AppComponent} from "./app.component";


const routes: Routes = [
  {path: 'listado' , component: ListadoProductosComponent},
  {path: 'agregar', component: AgregarProductosComponent}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
