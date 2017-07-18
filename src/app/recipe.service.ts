import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { recipeId, recipeKey } from './api-keys';
import { SecondRecipeService } from './second-recipe.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  RecipeId = recipeId;
  RecipeKey = recipeKey;
  constructor(private http: Http, private secondRecipeService: SecondRecipeService) { }

  getRecipe(search){
    return this.http.get("https://api.edamam.com/search?q=" + search + "&app_id=" + this.RecipeId +   "&app_key=" + this.RecipeKey + "&from=0&to=3&calories=gte%20591,%20lte%20722")
  }

  saveRecipes(search: string){
    return this.http.get("https://api.edamam.com/search?q=" + search + "&app_id=" + this.RecipeId +   "&app_key=" + this.RecipeKey + "&from=0&to=3&calories=gte%20591,%20lte%20722").subscribe(response => {
      let foundRecipe: Recipe;
      for(let result of response.json().hits) {
        foundRecipe = new Recipe(result.recipe.label, result.recipe.calories, result.recipe.totalNutrients.CHOCDF.quantity, result.recipe.totalNutrients.FAT.quantity, result.recipe.totalNutrients.PROCNT.quantity)

        for(let item of result.recipe.ingredients){
          foundRecipe.ingredients.push(item.text);
        }
        console.log(foundRecipe);
      }
    });
  }
}
