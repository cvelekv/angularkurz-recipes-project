import { Component, Input } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html"
})
export class RecipeDetail {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredient);
  }
}
