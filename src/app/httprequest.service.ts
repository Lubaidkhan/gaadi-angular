import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttprequestService {
  

  constructor(private http: HttpClient) {



  }

  getData() {

    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MmMyN2U5YjEwYzdlN2NiNTc5YmU4YjMiLCJuYW1lIjoib3NhbWEiLCJpYXQiOjE2NTY5MTM1NjMsImV4cCI6MTY1OTUwNTU2M30.UoubQjoaFzP9MXDxD1cKyPGQWNZ1ukgy-wl6frWn0tE"

   const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };

    // debugger;

    return this.http.get("http://localhost:5000/user",httpOptions)
    // .subscribe(data => {

    //   console.log("users from mongodb",data)
    // })
  }

  //add new user    
  //  public adduser(userData:any)
  //  {
  //    return this.http.post('http://localhost:5000/user'
  //  , userData)
  //  }

  postData(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };


    return this.http.post('http://localhost:5000/user', data,httpOptions)
  }


  updateData(id:any, data:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };


    return this.http.put(`http://localhost:5000/user/${id}`, data,httpOptions)

  }

  getUserDetails(userId:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.http.get(`http://localhost:5000/user/${userId}`,httpOptions)

  }

  deleteData(id:any) {
// debugger;
const httpOptions = {
  headers: new HttpHeaders({
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Cache-control': 'no-store',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem("token")
  })
};

    return this.http.delete(`http://localhost:5000/user/${id}`,httpOptions)
  }

}
