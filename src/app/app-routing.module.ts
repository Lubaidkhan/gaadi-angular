import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './_services/authGuard/auth-guard.service';


// const routes: Routes = [];
const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'register' },
  // { path: 'product', component: ProductComponent },
  // { path: 'login', component: LoginComponent },

  {
    path: 'auth',
    loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },

  {  path: 'user',
  loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate:[AuthGuardService]},

  { path: '',
  loadChildren: () => import('./auth-module/auth-module.module').then(m => m.AuthModuleModule) },
  { path: 'vehicle', 
  loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule) }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
