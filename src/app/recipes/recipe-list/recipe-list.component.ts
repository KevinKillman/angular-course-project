import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() rcClick = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("TestRecipe", "TestDescription", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Recipe.jpg/714px-Recipe.jpg?20170213105318"),
    new Recipe("Carrot", "Yum", "https://img.freepik.com/premium-vector/cute-carrot-cartoon-carrot-clipart-vector-illustration_160901-2668.jpg?w=2000")
  ];

  constructor() { }
  recipeItemHasBeenClick(recipe) {
    this.rcClick.emit(recipe);
  }
}
