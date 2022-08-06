import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [

  { path: '', component: UserListingComponent },
  {path:'adduser', component: AddUserComponent},
  {path:'updateuser/:id', component: UpdateUserComponent},
  {path:'deleteuser', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
