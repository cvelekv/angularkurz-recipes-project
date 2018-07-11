import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Recipe } from './../recipe.model';

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html"
})
export class RecipeItem {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() {}
  onSelected() {
    this.recipeSelected.emit();
  }
}
