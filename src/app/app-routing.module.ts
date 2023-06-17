import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { MaterialModule } from './shared/material/material.module';
import { UserModule } from './features/user/user.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: ':userId',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            UserModule,
          HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
