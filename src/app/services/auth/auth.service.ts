import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    api:string = `${environment.api}/api/auth`

    constructor(private http: HttpClient){}

    login(email: string, password: string){
      return this.http.post(`${this.api}/login`, {email,password}, {observe: 'response'})
    }
}
