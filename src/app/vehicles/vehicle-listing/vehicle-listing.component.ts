import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleService } from 'src/app/_services/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css']
})
export class VehicleListingComponent implements OnInit {

  vehicles:any ={}
  displayedColumns: string[] = ['actions', 'name', 'brand', 'model', 'make'];
  // users = {}
  dataSource: any

  applyFilter(event: any) {
    let { value: filterValue } = event.target; // Remove whitespace

    filterValue = filterValue.trim().toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor(private vehicleservice: VehicleService) { }

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;

  ngOnInit(): void {

    this.getVehicles();
  }

  getVehicles(){

    this.vehicleservice.getvehiclesData().subscribe((data:any)=> {

      this.vehicles = data

      console.log(this.vehicles)

      this.dataSource = new MatTableDataSource<vehicle>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(this.dataSource);
    })
  }

  deleteVehicle(vehicle: any) {

    // console.log("deleteUser",user)

    Swal.fire({
      title: 'Do you want to delete this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.vehicleservice.deleteVehicleData(vehicle._id).subscribe({next:(res:any) => {
          console.log("success delete")
          console.log(res)
         
          Swal.fire(res.message)
          this.getVehicles()
        },error:(err)=>{
          console.log(err)
        }})
    
      
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}

export interface vehicle {
  name: String;
  brand: String;
  model: String;
  make: String;
  power:String;
  seats:Number;
  carriage_price:Number;
  carriage_price_Discount:Number;
}