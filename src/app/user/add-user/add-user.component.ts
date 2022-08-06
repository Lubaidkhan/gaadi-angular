import { Component, OnInit } from '@angular/core';
import { HttprequestService } from 'src/app/httprequest.service';
// import { UserService } from 'src/app/_services/userservice/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: any = {};

  constructor(private _userService: HttprequestService) { }

  ngOnInit(): void {

    // this.adduser()
  }

  adduser(userData:any){
    this._userService.postData(userData).subscribe((res: any) => {
      // this.getusers();
      console.log(res)
    });
  }

  
}
