import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { Ingredient } from 'src/app/core/models/ingredient';

@Component({
  selector: 'app-form-recipe',
  templateUrl: './form-recipe.component.html',
  styleUrls: ['./form-recipe.component.scss']
})
export class FormRecipeComponent implements OnInit {
  steps: any[] = [];
  ingredients!: FormArray;
  directions!: FormArray;
  recipeForm!: FormGroup;

  isLinear = false;

  constructor(private builder: FormBuilder) {}

  ngOnInit(): void {
    
    this.initRecipeForm();
    this.addIngredient();
    this.addStep();
    this.addDirection();
  }

  initRecipeForm(): void {
    this.recipeForm = this.builder.group({
      Id: [null],
      name: ['', Validators.required],
      image: [''],
      preparationTime: [''],
      cookTime: [''],
      totalTime: [''],
      servings: [''],
      directions: this.builder.array([]),
      ingredients: this.builder.array([
        this.createIngredientFormGroup()
      ]),
      author: this.builder.group({
        // Define os campos do autor aqui
      })
    });

    this.ingredients = this.recipeForm.get('ingredients') as FormArray;
    this.directions = this.recipeForm.get('directions') as FormArray;
  }

  get ingredientsArray(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  accessFormGroup(index: number) : FormGroup {
    const ingredientGroup = this.ingredients.at(index) as FormGroup;
    return ingredientGroup;
  }

  createIngredientFormGroup(): FormGroup {
    return this.builder.group({
      Id: [null],
      name: [''],
      quantity: ['']
    });
  }

  createDirectionFormGroup(step: string): FormGroup {
    return this.builder.group({
      step: [step]
    });
  }

  addIngredient() {
    this.ingredients.push(this.createIngredientFormGroup());
  }

  addDirection() {
    this.directions.push(this.createDirectionFormGroup(''));
  }

  deleteIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  deleteDirection(index: number) {
    this.directions.removeAt(index);
  }

  addStep() {
    const newStep = {
      step: ''
    };
    this.steps.push(newStep);
  }

  removeStep(index: number) {
    if (this.steps.length > 1) {
      this.steps.splice(index, 1);
    }
  }

  save() {
    console.log(this.steps);
    console.log(this.recipeForm.getRawValue());
  }

}

