// Class en charge de centraliser et orchestrer l'ensemble des classes et leurs comportements.
import RecipesStates from "./models/RecipesState.js";
import Recipe from "./models/Recipe.js";
import RecipeCard from "./templates/RecipeCard.js";
import Combobox from "./templates/Combobox.js";
import ElementsList from "./models/ElementsLists.js";
import SearchBar from "./templates/SearchBar.js";
import ComboboxManagement from "./utils/ComboboxManagement.js";
import SearchBarManagement from "./utils/SearchBarManagement.js";
import TagsList from "./templates/TagsList.js";
import ComboboxInputManagement from "./utils/ComboboxInputManagement.js";
import TagsManagement from "./utils/TagsManagement.js";

export default class App {
  constructor() {
    this.app = this;
    this.recipesSection = document.getElementById("main");
    this.comboboxIngredients = document.getElementById("combobox-ingredients");
    this.comboboxUstensils = document.getElementById("combobox-ustensils");
    this.comboboxAppliances = document.getElementById("combobox-appliance");
    this.SearchBarSection = document.getElementById("search");
    this.recipesStates = new RecipesStates(this.app);
  }

  displayRecipes(data) {
    // Methode en charge de la création des éléments html-recette
    this.recipesSection.innerHTML = "";
    if (data.length > 0) {
      data
        // Transforme le tableau de données en se basant sur le modèle de la class Recipe
        .map((recipe) => new Recipe(recipe))
        // Création des cards recipe via la methode createRecipeCard de la class RecipeCard
        .forEach((recipe) => {
          const Template = new RecipeCard(recipe);
          this.recipesSection.innerHTML += Template.createRecipeCard();
        });
    } else {
      // Si le tableau de data entré en argument est vide, on affiche un message d'erreur
      this.recipesSection.innerHTML = `
      <p class="error-message">Aucune recette ne correspond à votre critère...<br>Vous pouvez chercher « tarte aux pommes », « poisson », etc.</p>
      `;
    }
  }

  displayCombobox() {
    // Création des différentes Combobox avec les paramètres associés via la class Combobox
    const templateIngredientsCombobox = new Combobox(
      "ingredients",
      "blue",
      "Ingrédient"
    );
    this.comboboxIngredients.innerHTML =
      templateIngredientsCombobox.createCombobox();

    const templateAppliancesCombobox = new Combobox(
      "appliances",
      "green",
      "Appareil"
    );
    this.comboboxAppliances.innerHTML =
      templateAppliancesCombobox.createCombobox();

    const templateUstensilsCombobox = new Combobox(
      "ustensils",
      "red",
      "Ustensile"
    );
    this.comboboxUstensils.innerHTML =
      templateUstensilsCombobox.createCombobox();

    // Ajout eventListeners des différentes Combobox via la class ComboboxManagement
    const eventListenerCombobox = new ComboboxManagement();
    eventListenerCombobox.eventListenerCombobox();
  }

  displayTagsList(data) {
    // Creation d'arrays contenant les listes pour chq type de tag
    // Liste sans doublon, classé alphabétiquement et commencant par 1 majuscule
    const elementsList = new ElementsList(data);
    const allIngredients = elementsList.getAllIngredients();
    const allUstensils = elementsList.getAllUstensils();
    const allAppliances = elementsList.getAllAppliances();

    // Stockage ds des variables des éléments html recevant les différentes listes
    const comboboxListAppliances = document.getElementById(
      "combobox-list-appliances"
    );
    const comboboxListIngredients = document.getElementById(
      "combobox-list-ingredients"
    );
    const comboboxListUstensils = document.getElementById(
      "combobox-list-ustensils"
    );

    // Stockage ds des variables des éléments html représentant les inputs de chq Combobox
    const comboboxInputAppliances = document.getElementById(
      "combobox-input-appliances"
    );
    const comboboxInputIngredients = document.getElementById(
      "combobox-input-ingredients"
    );
    const comboboxInputUstensils = document.getElementById(
      "combobox-input-ustensils"
    );

    // Création des li-html pour chq catégorie de tag
    // Prends en arguments la liste de tag, l'id et les tags selectionnés
    const templateListTagsAppliances = new TagsList(
      allAppliances,
      "appliances",
      this.recipesStates.selectedTags
    );
    comboboxListAppliances.innerHTML =
      templateListTagsAppliances.getComboboxList();

    const templateListTagsIngredients = new TagsList(
      allIngredients,
      "ingredients",
      this.recipesStates.selectedTags
    );
    comboboxListIngredients.innerHTML =
      templateListTagsIngredients.getComboboxList();

    const templateListTagsUstensils = new TagsList(
      allUstensils,
      "ustensils",
      this.recipesStates.selectedTags
    );
    comboboxListUstensils.innerHTML =
      templateListTagsUstensils.getComboboxList();

    // Ajout des eventListener pour chq input de chq Combobox
    // Prends en arguments la variable de l'élément html (input) et la liste de tags
    const eventListenerInputIngredients = new ComboboxInputManagement(
      comboboxInputIngredients,
      comboboxListIngredients
    );
    eventListenerInputIngredients.eventListenerCombobox();

    const eventListenerInputUstensils = new ComboboxInputManagement(
      comboboxInputUstensils,
      comboboxListUstensils
    );
    eventListenerInputUstensils.eventListenerCombobox();

    const eventListenerInputAppliances = new ComboboxInputManagement(
      comboboxInputAppliances,
      comboboxListAppliances
    );
    eventListenerInputAppliances.eventListenerCombobox();

    // Ajout des eventListeners et des comportements sur chq tag via la class TagManagement
    const eventListenerAllTags = new TagsManagement(this.recipesStates);
    eventListenerAllTags.eventListenerTags();
  }

  displaySearchBar() {
    // Création de la barre de recherche principale via la class SearchBar
    const templateSearchBar = new SearchBar();
    this.SearchBarSection.innerHTML += templateSearchBar.createSearchBar();

    // Ajout de eventListener et du comportement via la class SearchBarManagement
    const eventListenerSearchBar = new SearchBarManagement(this.recipesStates);
    eventListenerSearchBar.eventListenerSearchBar();
  }

  init() {
    // Methode qui permet l'initialisation de la page lors du premier chargement
    this.displayRecipes(this.recipesStates.initialState);
    this.displayCombobox();
    this.displayTagsList(this.recipesStates.initialState);
    this.displaySearchBar();
  }
}
