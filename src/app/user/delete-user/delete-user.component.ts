import { Component, OnInit } from '@angular/core';
import { HttprequestService } from 'src/app/httprequest.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user:any = {};

  constructor( private _userService: HttprequestService) { }

  ngOnInit(): void {
  }

  
  deleteUser(){

    const id = "";
    this._userService.deleteData(id).subscribe(res => {

      console.log(res)
    })

  }

}
