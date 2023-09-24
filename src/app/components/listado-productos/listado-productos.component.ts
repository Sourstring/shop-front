import {Component, NgIterable, OnInit} from '@angular/core';
import {ProductosServiceService} from "../../services/productos-service.service";

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit{

  listaProductos: any[] = [];
  newListaProductos: any[] = [];

  ngOnInit(): void {
    console.log('Componente listado-productos iniciado');
    this.conseguirProductos();
    console.log(this.listaProductos)
    this.listaProductos.forEach((producto) => {
      console.log(producto)
    })
  }

  constructor(private service: ProductosServiceService) {
  }

  private conseguirProductos() {
    console.log('Conseguir productos');
    this.service.conseguirProductos().subscribe((data) => {
      this.listaProductos.push(data)
    })
    this.orderList();
    console.log(this.service.conseguirProductos())
  }

  private orderList() {
    this.listaProductos.map((producto) => {
      producto.map((productos: any) => {
        this.newListaProductos.push(productos)
      })
    })
    console.log(this.newListaProductos)
  }
}
