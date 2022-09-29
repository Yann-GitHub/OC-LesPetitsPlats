// Class en charge d'instancier le template HTML pour les recettes de cuisine
// Le constructeur prend en paramètre la recette
export default class RecipeCard {
  constructor(recipe) {
    this.recipe = recipe;
  }

  // Methode permettant de gérer la création de la liste d'ingrédients en fonction des quantités et unités si nécessaire
  // Certains ingrédients ont une quantité et une unité, ou juste une quantité, ou juste l'ingrédient
  getIngredientsList(elements) {
    let ingredientsList = ``;

    for (let i = 0; i < elements.length; i += 1) {
      let li = document.createElement("li");
      li.classList.add("recipe-ingredient-item");

      if (elements[i].unit) {
        li = `
        <li class = "recipe-ingredient-item">
          <span class="recipe-ingredient-item-name">${elements[i].ingredient}: </span>
          <span class="recipe-ingredient-item-quantity">${elements[i].quantity} ${elements[i].unit}</span>
        </li>
        `;
      } else if (elements[i].quantity) {
        li = `
        <li class = "recipe-ingredient-item">
          <span class="recipe-ingredient-item-name">${elements[i].ingredient}: </span>
          <span class="recipe-ingredient-item-quantity">${elements[i].quantity}</span>
        </li>
        `;
      } else {
        li = `
        <li class = "recipe-ingredient-item">
          <span class="recipe-ingredient-item-name">${elements[i].ingredient}</span>
        </li>
        `;
      }
      ingredientsList += li;
    }
    return ingredientsList;
  }

  createRecipeCard() {
    const templateRecipeCard = `
    <article class="recipe">
        <div class="recipe-header">
          <img
            class="recipe-header-img"
            src="${this.recipe.picture}"
            alt="${this.recipe.name}"
          />
        </div>
        <div class="recipe-content">
          <div class="recipe-title">
            <h2 class="recipe-name">${this.recipe.name}</h2>
            <div class="recipe-timer">
              <i class="far fa-clock timer-icone"></i>
              <span class="timer-duration">${this.recipe.time}</span>
            </div>
          </div>
          <div class="recipe-info">
            <ul class="recipe-ingredient-list">
              ${this.getIngredientsList(this.recipe.ingredients)}
            </ul>
            <div class="recipe-description">
              <p class="recipe-description-text">
                ${this.recipe.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    `;

    return templateRecipeCard;
  }
}
