import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  // private ingredients: Ingredient[]=[
  //   new Ingredient('chicken',5),
  //   new Ingredient('onions',2),
  // ];

 

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(){

   this.ingredients = this.shoppinglistService.getIngredients();
   this.shoppinglistService.ingredientsChanged.subscribe(
     (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
     }
   );
  }
  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);

  // }

}
