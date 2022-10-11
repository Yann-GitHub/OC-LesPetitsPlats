// Algo 2 avec les différentes méthodes de l'objet array (map, filter...)
// Class en charge de l'eventListener et du comportement du champ de recherche principal
// Le constructeur prend en paramètre la liste des recettes et ses différents états via la class RecipesState
export default class SearchBarManagement {
  constructor(recipesStates) {
    this.recipesStates = recipesStates;
  }

  eventListenerSearchBar() {
    const searchBar = document.getElementById("search-input");

    searchBar.addEventListener("keyup", (event) => {
      const searchRequest = event.target.value.toLowerCase();
      // console.log(searchRequest);

      let filteredRecipes = [];

      // Si il y a des éléments ds le tableau de tag selectionnés
      if (this.recipesStates.selectedTags.length) {
        //  Et si la recherche est supérieur à 2 caractères
        if (searchRequest.length > 2) {
          filteredRecipes = this.recipesStates.initialState.filter((recipe) => {
            const ingredientsArray = recipe.ingredients.map((element) =>
              element.ingredient.toLowerCase()
            );
            // console.log(ingredientsArray);

            const ustensilsArray = recipe.ustensils.map((element) =>
              element.toLowerCase()
            );
            // console.log(ustensilsArray);

            const appliance = recipe.appliance.toLowerCase();
            // console.log(appliance);
            const allElementsLowercase = ingredientsArray.concat(
              ustensilsArray,
              appliance
            );
            // console.log(allElementsLowercase);

            const isMatch = this.recipesStates.selectedTags.every((val) =>
              allElementsLowercase.join(" ").includes(val)
            );
            // console.log(isMatch);

            return isMatch === true;
          });
          // console.log(filteredRecipes);

          let filteredRecipesWithRequest = [];
          filteredRecipesWithRequest = filteredRecipes.filter((recipe) => {
            const ingredientsArray = recipe.ingredients.map((element) =>
              element.ingredient.toLowerCase()
            );

            const name = recipe.name.toLowerCase();

            const description = recipe.description.toLowerCase();

            const isMatch =
              ingredientsArray.join(" ").includes(searchRequest) ||
              name.includes(searchRequest) ||
              description.includes(searchRequest);

            // console.log(isMatch);

            return isMatch === true;
          });
          // console.log(filteredRecipesWithRequest);

          this.recipesStates.updatedState = filteredRecipesWithRequest;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        } else {
          // Ou si la recherche est inférieur à 2 caractères
          filteredRecipes = this.recipesStates.initialState.filter((recipe) => {
            const ingredientsArray = recipe.ingredients.map((element) =>
              element.ingredient.toLowerCase()
            );
            // console.log(ingredientsArray);

            const ustensilsArray = recipe.ustensils.map((element) =>
              element.toLowerCase()
            );
            // console.log(ustensilsArray);

            const appliance = recipe.appliance.toLowerCase();
            // console.log(appliance);
            const allElementsLowercase = ingredientsArray.concat(
              ustensilsArray,
              appliance
            );
            // console.log(allElementsLowercase);

            const isMatch = this.recipesStates.selectedTags.every((val) =>
              allElementsLowercase.join(" ").includes(val)
            );
            // console.log(isMatch);

            return isMatch === true;
          });

          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        }
        // Si il n'y a pas d'éléments ds le tableau de tag selectionnés
      } else if (!this.recipesStates.selectedTags.length) {
        // Et si la recherche est supérieur à 2 caractères
        if (searchRequest.length > 2) {
          filteredRecipes = this.recipesStates.initialState.filter((recipe) => {
            const ingredientsArray = recipe.ingredients.map((element) =>
              element.ingredient.toLowerCase()
            );

            const name = recipe.name.toLowerCase();

            const description = recipe.description.toLowerCase();

            const isMatch =
              ingredientsArray.join(" ").includes(searchRequest) ||
              name.includes(searchRequest) ||
              description.includes(searchRequest);

            // console.log(isMatch);

            return isMatch === true;
          });

          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        } else {
          // Ou si la recherche est inférieur à 2 caractères
          const allrecipes = document.querySelectorAll(".recipe");
          // console.log(allrecipes.length);
          if (allrecipes.length !== 50) {
            this.recipesStates.updatedState = [];
            this.recipesStates.updateRecipeList(
              this.recipesStates.initialState
            );
          }
        }
      }
    });
  }
}
