import { Recipe } from './recipe.model';


export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg"
    ),
    new Recipe(
      "Anoter Test Recipe",
      "This test",
      "https://img.bestrecipes.com.au/rZFo7F8i/h300-w400-cscale-1495077669/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg"
    )
  ];

  getRecipes(){
      return this.recipes.slice();
  }
}
