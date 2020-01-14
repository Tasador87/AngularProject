import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('TestName', 'This is Test Recipe', 'https://www.dinneratthezoo.com/wp-content/uploads/2019/08/candied-yams-5.jpg'),
    new Recipe('TestName2', 'This is Test Recipe2', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}