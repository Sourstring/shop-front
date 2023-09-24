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
}
