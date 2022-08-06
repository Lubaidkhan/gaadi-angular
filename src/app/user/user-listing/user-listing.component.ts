import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { HttprequestService } from 'src/app/httprequest.service';
import { AuthService } from 'src/app/_services/auth.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {


  displayedColumns: string[] = ['actions', 'status', 'name', 'role_name', 'email'];
  users = {}
  dataSource: any



  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  // ngAfterViewInit() {

  // }


  applyFilter(event: any) {
    let { value: filterValue } = event.target; // Remove whitespace

    filterValue = filterValue.trim().toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }




  constructor(private userService: HttprequestService
    , private authService: AuthService,) {

  }


  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatSort) sort: any;


  ngOnInit(): void {

    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    this.getUsers()
  }

  getUsers() {

    console.log("inside getUsers")
    debugger;
    this.userService.getData()
      .subscribe((data: any) => {
        this.users = data;

        // console.log(data['results']);
        console.log(data)
       
        this.dataSource = new MatTableDataSource<user>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(this.dataSource);

        // console.log("users from mongodb", data)
      })
  }

 
  deleteUser(user: any) {

    // console.log("deleteUser",user)

    Swal.fire({
      title: 'Do you want to delete this user?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.userService.deleteData(user._id).subscribe({next:(res:any) => {
          console.log("success delete")
          console.log(res)
         
          Swal.fire(res.message)
          this.getUsers()
        },error:(err)=>{
          console.log(err)
        }})
    
      
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

//   editUser(id:any ,data: any){

//     this.userService.updateData(id,data).subscribe({next:(res:any) => {
//       console.log("success update user",res);
//       // console.log(res)

//   },error:(err)=>{
//     console.log(err)
//   }})

//   }
// }

}

export interface user {
  name: string;
  role_name: string;
  email: string;
  status: string;
}
