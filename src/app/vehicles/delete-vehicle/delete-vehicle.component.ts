import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/_services/vehicle.service';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {

  constructor( private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  deleteVehicle(){

    const id = "";
    this.vehicleService.deleteVehicleData(id).subscribe(res => {

      console.log(res)
    })

  }


}
