import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }


  getCategories() {
    return this.http.get('http://localhost:8080/api/category/all');
  }

  crearCategoria(categoria: any) {
    return this.http.post('http://localhost:8080/api/category/create', categoria);
  }
}
