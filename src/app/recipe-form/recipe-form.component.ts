import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css'],
  providers: [RecipeService]
})
export class RecipeFormComponent implements OnInit {
  recipes: any[]=null;

  constructor(private router: Router, private recipeService: RecipeService) { }
  getRecipes(search: string) {
    this.recipeService.getRecipe(search).subscribe(response => {
      this.recipes = response.json();
      console.log(response.json());
    });
  }

  ngOnInit() {
  }

}
