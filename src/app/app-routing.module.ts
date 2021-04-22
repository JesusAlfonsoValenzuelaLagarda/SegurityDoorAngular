import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAccessControlComponent } from './components/add-access-control/add-access-control.component';
import { AdminComponent } from './components/admin/admin.component';
import { CreateUserControlComponent } from './components/create-user-control/create-user-control.component';

const routes: Routes = [
  {
    path:"", redirectTo:"AddAccessControl", pathMatch:"full"
  },
  {
    path: "AddAccessControl", component: AddAccessControlComponent
  },
  {
    path: "Admin", component: AdminComponent
  },
  {
    path: "CreateUserControl", component: CreateUserControlComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
