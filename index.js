import { default as dataRecipes } from "./data/recipes.js";
import Recipe from "./script/models/recipe.js";
import RecipeCard from "./script/templates/recipeCard.js";

class App {
  constructor() {
    this.recipesSection = document.getElementById("main");
    this.dataRecipes = dataRecipes;
  }

  displayData() {
    // Récupération des recettes via recipes.js
    const recipesData = this.dataRecipes;
    recipesData
      // Transforme le tableau de données en un tableau de classe Recipe
      .map((recipe) => new Recipe(recipe))
      // Création des cards recipe via le template recipeCard.js
      .forEach((recipe) => {
        const Template = new RecipeCard(recipe);
        this.recipesSection.innerHTML += Template.createRecipeCard();
      });
  }
}

// Instanciation via la class App et appel de la méthode displayData()
const app = new App();
app.displayData();
