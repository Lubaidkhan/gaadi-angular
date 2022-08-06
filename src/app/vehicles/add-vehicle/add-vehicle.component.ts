import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VehicleService } from 'src/app/_services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {

  // form: FormGroup;

  vehicle:any = {};

  constructor(public fb: FormBuilder,private vehicleservice:VehicleService) { 
    // this.form = this.fb.group({
    //   name: [''],
    //   avatar: [''],
    // });
  }

  ngOnInit(): void {
  }
  // uploadFile(event:any) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({
  //     avatar: file,
  //   });
  //   this.form.get('avatar').updateValueAndValidity();
  // }

  // submitForm() {
  //   var formData: any = new FormData();
  //   formData.append("name", this.form.get('name').value);
  //   formData.append("avatar", this.form.get('avatar').value);
  //   this.vehicleservice.postVehicle(formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }

  addvehicle(){
    // let myForm: any= document.getElementById('myForm');
   var formData = new FormData();
    const keys = Object.keys(this.vehicle)
    console.log(keys)
    keys.forEach(key => formData.append(key,this.vehicle[key]))
    // debugger;
    console.log(formData)
    this.vehicleservice.postVehicle(formData).subscribe((res: any) => {
      // this.getusers();
      // this.vehicle = res
      console.log(res)
    }
    
  )
  }
}
