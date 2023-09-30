import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MarcaServiceService {

  constructor(private http: HttpClient) {
  }

  crearMarca(marca: any) {
    return this.http.post('http://localhost:8080/api/marca/save', marca);
  }

  getMarcas() {
    return this.http.get('http://localhost:8080/api/marca');
  }
}
