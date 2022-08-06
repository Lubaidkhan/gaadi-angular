import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';
import { VehiclesComponent } from './vehicles.component';

const routes: Routes = [
  { path: '', component: VehicleListingComponent },
  { path: 'addvehicle', component: AddVehicleComponent },
  // { path: 'listvehicles', component: VehicleListingComponent },
  {path:'updatevehicle/:id', component: UpdateVehicleComponent}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
