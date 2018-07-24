import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  providers: [RecipeService]
})
export class Recipes implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  selectedRecipe: Recipe;
}
