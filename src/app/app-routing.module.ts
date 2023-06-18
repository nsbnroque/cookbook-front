import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterUserComponent } from './features/user/register-user/register-user.component';
import { MaterialModule } from './shared/material/material.module';
import { UserModule } from './features/user/user.module';
import { HomeComponent } from './pages/home/home.component';
import { HomeModule } from './pages/home/home.module';
import { RecipeModule } from './features/recipe/recipe.module';
import { FormRecipeComponent } from './features/recipe/form-recipe/form-recipe.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterUserComponent
  },
  {
    path: ':userId',
    component: HomeComponent
  },
  {
    path: ':userId/recipe',
    component: FormRecipeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            UserModule,
            HomeModule,
            RecipeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
