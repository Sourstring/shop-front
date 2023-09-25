import {Injectable, NgIterable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {

  constructor(private http: HttpClient) { }

  conseguirProductos(): Observable<Object> {
    console.log('Conseguir productos');
    return this.http.get('http://localhost:8080/api/product/all');
  }

  crearProducto(producto: any): Observable<Object> {
    console.log('Crear producto');
    return this.http.post('http://localhost:8080/api/product/create', producto);
  }
}
