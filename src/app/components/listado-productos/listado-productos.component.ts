import {Component, OnInit} from '@angular/core';
import {ProductosServiceService} from "../services/productos-service.service";

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit{

  listaProductos: Object = [];

  ngOnInit(): void {
    console.log('Componente listado-productos iniciado');
    this.conseguirProductos();
  }

  constructor(private service: ProductosServiceService) {
  }

  private conseguirProductos() {
    console.log('Conseguir productos');
    this.listaProductos = this.service.conseguirProductos();
  }
}
