import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ProductosServiceService} from "../../services/productos-service.service";

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit{


  marca: string = "";
  modelo: string = "";
  precio: number = 0;
  stock: number = 0;
  descripcion: string = "";
  categorias: any[] = [];
  categoria: string = "";
  constructor(private category: CategoryService, private product: ProductosServiceService) { }

  ngOnInit(): void {
    this.obtenerCategorias();
    console.log(this.categorias)
  }

  onSubmit() {
    let product = {
      marca: this.marca,
      modelo: this.modelo,
      precio: this.precio,
      stock: this.stock,
      descripcion: this.descripcion,
      category: this.categoria
    }
    this.product.crearProducto(product).subscribe((data: any) =>{
      console.log(data)
    })
  }

  private obtenerCategorias() {
    this.category.getCategories().subscribe((data: any) => {
      data.forEach((categoria: any) => {
          this.categorias.push(categoria.nombre)
        }
      )
    })
  }
}
