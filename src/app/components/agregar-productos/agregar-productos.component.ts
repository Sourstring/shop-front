import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {ProductosServiceService} from "../../services/productos-service.service";
import {Router} from "@angular/router";
import {MarcaServiceService} from "../../services/marca-service.service";

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.css']
})
export class AgregarProductosComponent implements OnInit {


  marca: string = "";
  modelo: string = "";
  precio: number = 0;
  stock: number = 0;
  descripcion: string = "";
  categorias: any[] = [];
  categoria: string = "";
  formulario: string = "";
  marcaOwn: any;
  marcas: any[] = [];
  categoriaOwn: any;

  constructor(private category: CategoryService, private product: ProductosServiceService, private router: Router, private mark: MarcaServiceService) {
  }

  ngOnInit(): void {
    this.obtenerCategorias();
    this.obtenerMarcas();
    console.log(this.categorias)
    console.log(this.marcas)
  }

  onSubmitProduct() {
    let product = {
      marca: this.marca,
      modelo: this.modelo,
      precio: this.precio,
      stock: this.stock,
      descripcion: this.descripcion,
      category: this.categoria
    }
    this.product.crearProducto(product).subscribe((data: any) => {
      console.log(data)
      this.router.navigate(['/listado'])
    })
  }

  private obtenerCategorias() {
    this.categorias = []
    this.categorias.push("Seleccione una categoria")
    this.category.getCategories().subscribe((data: any) => {
      data.forEach((categoria: any) => {
          this.categorias.push(categoria.nombre)
        }
      )
    })
  }


  changeForm(formularioDeseado: string) {
    this.formulario = formularioDeseado;
  }

  onSubmitMarca() {
    let marca = {
      nombre: this.marcaOwn
    }
    this.mark.crearMarca(marca).subscribe((data: any) => {
      console.log(data)
      this.obtenerMarcas();
    })
  }

  obtenerMarcas() {
    this.marcas = []
    this.marcas.push("Seleccione una marca")
    this.mark.getMarcas().subscribe(((data: any) => {
      data.forEach((marca: any) => {
        this.marcas.push(marca.nombre)

      })
    }))
  }

  onSubmitCategoria() {
    let caty = {
      nombre: this.categoriaOwn
    }
    this.category.crearCategoria(caty).subscribe((data: any) => {
      console.log(data)
      this.obtenerCategorias();
    });
  }
}
