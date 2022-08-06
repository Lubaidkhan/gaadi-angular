import { Component } from '@angular/core';
import { environment } from 'src/environments/environment.developer';

import { HttprequestService } from './httprequest.service'
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'gaadi-angular';

  users = {}

  constructor(private userService: HttprequestService
    , private authService: AuthService) {

  }

  ngOnInit() {

    let token = environment.env_token

    // token ? this.getUsers() : this.loginUser()

  //  this.loginUser()
   
  }

  // loginUser(){

  //   console.log('login inside')
  //   this.authService.loginUser()
  //   .subscribe((data:any )=> {

  //     localStorage.setItem('token',data.token)

  //     // this.getUsers()

  //     console.log(data)

      
  //   })

  // }
// getUsers(){

//   console.log("inside getUsers")
//   this.userService.getData()
//   .subscribe(data => {

//     this.users = data;
//     console.log("users from mongodb", data)
//   })
// }

}
