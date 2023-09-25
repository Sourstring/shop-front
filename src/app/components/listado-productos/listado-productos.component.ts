import {Component, NgIterable, OnInit} from '@angular/core';
import {ProductosServiceService} from "../../services/productos-service.service";

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit{

  listaProductos: any[] = [];

  ngOnInit(): void {
    console.log('Componente listado-productos iniciado');
    this.conseguirProductos();
    console.log(this.listaProductos)
  }

  constructor(private service: ProductosServiceService) {
  }

  private conseguirProductos() {
    console.log('Conseguir productos');
    this.service.conseguirProductos().subscribe((data: any) => {
      data.forEach((producto: any)=> {
        this.listaProductos.push(producto);
      })
    })
  }


}
