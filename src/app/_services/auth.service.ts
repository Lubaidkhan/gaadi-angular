import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.developer';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  loginUser(userInfo: any) {

    // const userInfo: any = {

    //   "email": "lubaid@gmail.com",
    //   "password": "123456"
    // }

    return this.http.post(environment.host_Url, userInfo)
  }

  register(data: any) {

    return this.http.post('http://localhost:5000/auth/register', data)
  }
}
