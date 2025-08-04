import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    api:string = `${environment.api}`
    httpOptions = {
      withCredentials: true,
    }
    constructor(private http: HttpClient){}

    //add interface for params
   login(payload: any) {
  return this.http.get(`${this.api}/sanctum/csrf-cookie`, this.httpOptions).pipe(
    switchMap(() => {
      return this.http.post(
        `${this.api}/api/auth/login`,
        payload,
        {
          ...this.httpOptions,
          observe: 'response',
        }
      );
    })
  );
}


}
