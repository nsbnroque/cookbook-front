import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { MaterialModule } from './shared/material/material.module';
import { UserModule } from './features/user/user.module';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            UserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
