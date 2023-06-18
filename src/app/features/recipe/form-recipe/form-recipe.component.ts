import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/ingredient';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit{
  ingredients: Ingredient[] = [];
  recipeForm!: FormGroup;

  firstFormGroup = this.builder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this.builder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.addIngredient();
    this.initRecipeForm();
  }

  initRecipeForm(): void {
    this.recipeForm = this.builder.group({
      Id: [null],
      name: ['', Validators.required],
      image: ['', Validators.required],
      preparationTime: [null, Validators.required],
      cookTime: [null, Validators.required],
      totalTime: [null, Validators.required],
      servings: [null, Validators.required],
      directions: this.builder.array([]),
      ingredients: this.builder.array([]),
      author: this.builder.group({
        // Define os campos do autor aqui
      })
    });
  }

  createIngredientFormGroup(ingredient: Ingredient): FormGroup {
    return new FormGroup({
      name: new FormControl(ingredient.name),
      quantity: new FormControl(ingredient.quantity)
    });
  }

  addIngredient() {
    const newIngredient: Ingredient = {
      Id: 0,
      name: '',
      quantity: ''
    };
    this.ingredients.push(newIngredient);
  }

  deleteIngredient(ingredient: Ingredient) {
    if (this.ingredients.length > 1){
      const index = this.ingredients.indexOf(ingredient);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
    return;
    }
    
  }
}
