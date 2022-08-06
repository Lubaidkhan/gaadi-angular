import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http:HttpClient) { }

  postVehicle(vehicle: any){

    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        // 'Content-Type': 'multipart/form-data',
        'Content-Type': ' multipart-form :boundary -----',
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };


    return this.http.post('http://localhost:5000/vehicle/',vehicle,httpOptions)
  }


  getvehiclesData(){

    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };


    return this.http.get('http://localhost:5000/vehicle',httpOptions)
  }

  getVehicleDetails(vehicleId:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };

    return this.http.get(`http://localhost:5000/vehicle/${vehicleId}`,httpOptions)

  }

  updateVehicleData(id:any, data:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Cache-control': 'no-store',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      })
    };

    'multipart/form-data'
    return this.http.put(`http://localhost:5000/vehicle/${id}`, data,httpOptions)

  }

  deleteVehicleData(id:any) {
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
    
        return this.http.delete(`http://localhost:5000/vehicle/${id}`,httpOptions)
      }
}
