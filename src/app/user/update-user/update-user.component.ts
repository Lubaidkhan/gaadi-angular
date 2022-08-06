import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { HttprequestService } from 'src/app/httprequest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userId: any
  user: any ={}

  constructor(private _userService: HttprequestService, private _activatedRoute: ActivatedRoute, private router: Router) {

    // _activatedRoute.queryParams.subscribe(params => {

    //   console.log("params",params)

    //   this.userId = params['id'];

     
    // })

    const id: any = _activatedRoute.params.pipe(map(p => p['id']));

    id.subscribe((p:any)=>{
      this.userId = p;

      // console.log( "snapshot", p)
      this.getUserDetails();
    })

   
        }

  ngOnInit(): void {
  }

  updateUser() {

    Swal.fire({
      title: 'Do you want to update this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Update',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this._userService.updateData(this.userId, this.user).subscribe({
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

  getUserDetails() {

    this._userService.getUserDetails(this.userId).subscribe({
      next: (res: any) => {
        
        this.user = res
        console.log(this.user)

      }, error: (err) => {
        console.log(err)
      }
    })



  }


  //   updateUser(id:any,data: any) {

  //  this._userService.updateData(id,data).subscribe(res => {

  //   console.log(res)
  //  })

  //  }

}


