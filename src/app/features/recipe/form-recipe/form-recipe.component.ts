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
  steps: any[] =[];
  recipeForm!: FormGroup;
  directionsForm!: FormGroup;
  ingredientForm!: FormGroup;

  isLinear = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    this.addIngredient();
    this.addStep();
    this.initRecipeForm();
    
  }

  initRecipeForm(): void {
    this.recipeForm = this.builder.group({
      Id: [null],
      name: ['', Validators.required],
      image: [''],
      preparationTime: ['', [Validators.pattern(/^\d+$/)]],
      cookTime: ['', [ Validators.pattern(/^\d+$/)]],
      totalTime: ['', [ Validators.pattern(/^\d+$/)]],
      servings: ['', [Validators.pattern(/^\d+$/)]],
      directions: this.builder.array([]),
      ingredients: this.builder.array([]),
      author: this.builder.group({
        // Define os campos do autor aqui
      })
    });

    this.directionsForm = this.builder.group({
      step: ['']
    });

    this.ingredientForm = this.builder.group({
      Id: [null],
      name: [''],
      quantity:['']
    });
  }

  // createIngredientFormGroup(ingredient: Ingredient): FormGroup {
  //   return new FormGroup({
  //     name: new FormControl(ingredient.name),
  //     quantity: new FormControl(ingredient.quantity)
  //   });
  // }

  // createDirectionsFormGroup(step : String): FormGroup {
  //   return new FormGroup({
  //     step: new FormControl(step),

  //   });
  // }

  addIngredient() {
    const newIngredient: Ingredient = {
      Id: 0,
      name: '',
      quantity: ''
    };
    this.ingredients.push(newIngredient);
  }

  addStep() {
    const newStep = {
      step: ''
    };
    this.steps.push(newStep);
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

  removeStep(step : any) {
    if (this.steps.length > 1){
      const index = this.steps.indexOf(step);
    if (index !== -1) {
      this.steps.splice(index, 1);
    }
    return;
    }
    
  }
}
