import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {LoginE} from './login/loginInterface'
import { Observable } from 'rxjs';
import { Product } from './dsahboard/dashboardInterface';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  getLogin(username:string,password:string):Observable < LoginE[] > {
    let data = {username,password}
    let url = "https://fakestoreapi.com/auth/login";
    return this.http.post<LoginE[]>(url,data)
  }

  getProduct():Observable < Product[] > {
    let url = "https://fakestoreapi.com/products?limit=8";
    return this.http.get<Product[]>(url)
  }
}
