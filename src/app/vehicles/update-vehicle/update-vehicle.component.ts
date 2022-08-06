import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { VehicleService } from 'src/app/_services/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  vehicleId:any;
  vehicle:any= {}

  

  constructor(private vehicleService:VehicleService,private activatedRoute: ActivatedRoute) { 

    const id: any = activatedRoute.params.pipe(map(p => p['id']));

    id.subscribe((p:any)=>{
      this.vehicleId = p;

      // console.log( "snapshot", p)
      this.getVehicleDetails();
    })
  }

  ngOnInit(): void {
  }




  
  updateVehicle() {

    Swal.fire({
      title: 'Do you want to update this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Update',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.vehicleService.updateVehicleData(this.vehicleId, this.vehicle).subscribe({
          next: (res: any) => {
            console.log("success update user", res);
            // console.log(res)

            Swal.fire(res.message)
    
          }, error: (err) => {
            console.log(err)
          }
        })
    
      
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
   

  }
  getVehicleDetails() {

    this.vehicleService.getVehicleDetails(this.vehicleId).subscribe({
      next: (res: any) => {
        
        this.vehicle = res
        console.log(this.vehicle)

      }, error: (err) => {
        console.log(err)
      }
    })



  }


}
