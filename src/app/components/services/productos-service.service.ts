import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  conseguirProductos() {
    console.log('Conseguir productos');
    let listaProductos: Object = []
    this.http.get('http://localhost:8080/api/product/all').subscribe((data) => {
      console.log(data);
      listaProductos = data;
    })
    return listaProductos;
  }
}
