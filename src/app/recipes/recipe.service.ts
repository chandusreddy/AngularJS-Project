import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] =[
        new Recipe('Chicken Biryani',
        'Authentic Hyderabadi Biryani',
        'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg'
        ,[
            new Ingredient('chicken',5),
            new Ingredient('onions',2),
            new Ingredient('tomatoes',2)
        ]),
        new Recipe('Mutton Biryani',
        'Special Mutton fry Biryani',
        'https://www.hungryforever.com/wp-content/uploads/2017/09/lucknowi-mutton-biryani-recipe.jpg ',
        [
            new Ingredient('mutton',5),
            new Ingredient('onions',2),
            new Ingredient('tomatoes',2)
        ])
    
    
      ];

      constructor(private shoppinglistService: ShoppingListService){

      }
      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
          this.shoppinglistService.addIngredients(ingredients);

      }

}