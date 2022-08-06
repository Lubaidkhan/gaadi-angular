import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService ,private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){

    // console.log('login inside,',this.user);

    // return 
    this.authService.loginUser(this.user)
    .subscribe((data:any )=> {
console.log(data.token)
      localStorage.setItem('token',data.token)

      this.router.navigate(['/user']);

      // this.getUsers()

      console.log(data)

      
    })

  }

}
