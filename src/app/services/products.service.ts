import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api_url = "http://localhost:3010/api/v1/products/"
  constructor(private http: HttpClient) { }

  getProducts():Observable<any>{
    return this.http.get(this.api_url)
  }

  getOne(id: string | null){
    return this.http.get(`${this.api_url}item/${id}`)
  }

}
