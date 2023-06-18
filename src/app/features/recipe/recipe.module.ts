import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRecipeComponent } from './form-recipe/form-recipe.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from 'src/app/shared/components/inputs/inputs.module';



@NgModule({
  declarations: [
    FormRecipeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    InputsModule
  ]
})
export class RecipeModule { }
