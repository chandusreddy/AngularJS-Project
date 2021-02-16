import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] ;
  // recipes: Recipe[] =[
  //   new Recipe('Chicken Biryani','Chicken','https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg'),
  //   new Recipe('Mutton Biryani','Mutton','https://www.hungryforever.com/wp-content/uploads/2017/09/lucknowi-mutton-biryani-recipe.jpg ')


  // ];


  constructor(private recipeService:  RecipeService) { 


  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);

  // }

}
