// Class en charge de la structuration des données pour la création de recettes
// et permettant d'ajouter l'image correnspondant à chaque recette
export default class Recipe {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  get picture() {
    return `assets/recipes_img/${this.id}.jpg`;
  }
}
