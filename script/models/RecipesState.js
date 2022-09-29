// Class en charge de centraliser les datas (recipes)
// Les differents états des datas (initial, modifié)
// La liste des tags selectionnés
// Contient une methode pour de mettre à jour les recettes et les tags associés en fonction des datas en argument
import allRecipes from "../../data/recipes.js";

export default class RecipesStates {
  constructor(app) {
    this.app = app;
    this.initialState = allRecipes;
    this.updatedState = [];
    this.selectedTags = [];
  }

  updateRecipeList(data) {
    const app = this.app;
    app.displayRecipes(data);
    app.displayTagsList(data);
  }
}
