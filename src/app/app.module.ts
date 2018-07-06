import { RecipeDetail } from './components/recipeBook/recipeDetail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeItem } from './components/recipeBook/recipeItem/recipe-item.component';
import { RecipeList } from './components/recipeBook/recipeList/recipe-list.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shoppingList/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [AppComponent, RecipeList, RecipeItem, RecipeDetail, ShoppingListComponent, ShoppingListEditComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
