import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Meal with Vegetables', 'This is unique recipe with chicken meal, and a lot of vegetables.',
     'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg '),
    new Recipe('Rise with Chicken', 'This is delicious rise with chicken.', 
    'https://www.dinneratthezoo.com/wp-content/uploads/2019/08/candied-yams-5.jpg')
  ];

  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }

}