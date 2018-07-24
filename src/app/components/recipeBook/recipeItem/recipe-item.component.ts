import { Component, Input } from '@angular/core';

import { RecipeService } from '../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html"
})
export class RecipeItem {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
