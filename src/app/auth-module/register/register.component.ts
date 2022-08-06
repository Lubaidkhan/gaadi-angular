import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { HttprequestService } from 'src/app/httprequest.service';
import { AuthService } from 'src/app/_services/auth.service';
import Swal from 'sweetalert2';
// import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:any = {}

  constructor( private userService: AuthService) { }

  ngOnInit(): void {

    
  }

   emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  hide = true;


//   onInput(value) {
//     if (this.form.hasError('confirmedDoesNotMatch')) { // or some other test of the value
//         this.form.get('confirmPassword').setErrors([{'confirmedDoesNotMatch': true}]);
//     } else {
//         this.form.get('confirmPassword').setErrors(null);
//     }
// }

adduser(userData:any){
   // Swal.fire({
  //   position: 'top-end',
  //   icon: 'success',
  //   title: 'User Added Successfully!',
  //   showConfirmButton: false,
  //   timer: 1500
  // })

  this.userService.register(userData).subscribe((res: any) => {
    // this.getusers();
    Swal.fire({
      title:res.message,
      position: 'top-end',
        icon: 'success',
      //   title: 'User Added Successfully!',
        showConfirmButton: false,
        timer: 1500});
  });
 
}

   }

   

