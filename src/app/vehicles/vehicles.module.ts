import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VehiclesRoutingModule } from './vehicles-routing.module';
import { VehiclesComponent } from './vehicles.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { UpdateVehicleComponent } from './update-vehicle/update-vehicle.component';
import { DeleteVehicleComponent } from './delete-vehicle/delete-vehicle.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [
    VehiclesComponent,
    AddVehicleComponent,
    VehicleListingComponent,
    UpdateVehicleComponent,
    DeleteVehicleComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    FlexLayoutModule,
    MatCardModule,
    MaterialFileInputModule
  ]
})
export class VehiclesModule { }
