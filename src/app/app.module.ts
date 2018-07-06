import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeDetail } from './components/recipeBook/recipeDetail/recipe-detail.component';
import { RecipeItem } from './components/recipeBook/recipeItem/recipe-item.component';
import { RecipeList } from './components/recipeBook/recipeList/recipe-list.component';
import { Recipes } from './components/recipeBook/recipes.component';
import { ShoppingListEditComponent } from './components/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './components/shoppingList/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeList,
    RecipeItem,
    RecipeDetail,
    ShoppingListComponent,
    ShoppingListEditComponent,
    HeaderComponent,
    Recipes
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
