import { default as dataRecipes } from "../data/recipes.js";
import Recipe from "./models/Recipe.js";
import RecipeCard from "./templates/RecipeCard.js";
import Combobox from "./templates/Combobox.js";
import ElementsList from "./models/ElementsLists.js";
import SearchBar from "./templates/SearchBar.js";

export default class App {
  constructor() {
    this.dataRecipes = dataRecipes;
    this.recipesSection = document.getElementById("main");
    this.comboboxIngredients = document.getElementById("combobox-ingredients");
    this.comboboxUstensils = document.getElementById("combobox-ustensils");
    this.comboboxAppliances = document.getElementById("combobox-appliance");
    this.SearchBarSection = document.getElementById("search");
  }

  displayRecipes() {
    // Récupération des recettes via recipes.js
    const recipesData = this.dataRecipes;
    recipesData
      // Transforme le tableau de données en un tableau de classe Recipe
      .map((recipe) => new Recipe(recipe))
      // Création des cards recipe via le template RecipeCard.js
      .forEach((recipe) => {
        const Template = new RecipeCard(recipe);
        this.recipesSection.innerHTML += Template.createRecipeCard();
      });
  }

  displayCombobox() {
    const recipesData = this.dataRecipes;
    // Instanciation de la class ElementsList et appel des méthodes pour la récupération des différentes data
    const elementsList = new ElementsList(recipesData);
    const allIngredients = elementsList.getAllIngredients();
    const allUstensils = elementsList.getAllUstensils();
    const allAppliances = elementsList.getAllAppliances();

    // Création des différentes Combobox avec les paramètres associés
    const templateIngredientsCombobox = new Combobox(
      allIngredients,
      "ingredients",
      "blue",
      "Ingrédient"
    );
    this.comboboxIngredients.innerHTML +=
      templateIngredientsCombobox.createCombobox();
    templateIngredientsCombobox.eventListenerCombobox();

    const templateAppliancesCombobox = new Combobox(
      allAppliances,
      "appliances",
      "green",
      "Appareil"
    );
    this.comboboxAppliances.innerHTML +=
      templateAppliancesCombobox.createCombobox();
    templateAppliancesCombobox.eventListenerCombobox();

    const templateUstensilsCombobox = new Combobox(
      allUstensils,
      "ustensils",
      "red",
      "Ustensile"
    );
    this.comboboxUstensils.innerHTML +=
      templateUstensilsCombobox.createCombobox();
    templateUstensilsCombobox.eventListenerCombobox();
  }

  displaySearchBar() {
    // Création de la barre de recherche principale
    const templateSearchBar = new SearchBar();
    this.SearchBarSection.innerHTML += templateSearchBar.createSearchBar();
  }
}
