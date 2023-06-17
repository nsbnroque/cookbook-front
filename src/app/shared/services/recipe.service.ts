import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/core/models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private baseUrl = '/api/v1/recipes';

  constructor(private http: HttpClient) { }

  saveRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.baseUrl, recipe);
  }

  findRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }

  deleteRecipe(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
