// Algo 1 avec des boucles natives (for...)
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

      const filteredRecipes = [];

      // Si il y a des éléments ds le tableau de tag selectionnés
      if (this.recipesStates.selectedTags.length) {
        //  Et si la recherche est supérieur à 2 caractères
        if (searchRequest.length > 2) {
          for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
            const ingredientArray = [];
            const { ingredients } = this.recipesStates.initialState[i];
            const ustensilsArray = [];
            const { ustensils } = this.recipesStates.initialState[i];
            const { appliance } = this.recipesStates.initialState[i];

            for (let j = 0; j < ingredients.length; j += 1) {
              ingredientArray.push(ingredients[j].ingredient);
            }

            for (let j = 0; j < ustensils.length; j += 1) {
              ustensilsArray.push(ustensils[j]);
            }

            const allElementsArray = ingredientArray.concat(ustensilsArray);
            allElementsArray.push(appliance);

            const allElementsArrayLowercase = [];
            for (let i = 0; i < allElementsArray.length; i += 1) {
              allElementsArrayLowercase.push(allElementsArray[i].toLowerCase());
            }

            if (
              this.recipesStates.selectedTags.every((val) =>
                allElementsArrayLowercase.join(" ").includes(val)
              )
            ) {
              filteredRecipes.push(this.recipesStates.initialState[i]);
            }
          }

          const filteredRecipesWithRequest = [];
          for (let i = 0; i < filteredRecipes.length; i += 1) {
            const ingredientArray = [];
            const { ingredients } = filteredRecipes[i];
            const { name } = filteredRecipes[i];
            const { description } = filteredRecipes[i];

            for (let j = 0; j < ingredients.length; j += 1) {
              ingredientArray.push(ingredients[j].ingredient);
            }

            if (
              ingredientArray.join(" ").toLowerCase().includes(searchRequest) ||
              name.toLowerCase().includes(searchRequest) ||
              description.toLowerCase().includes(searchRequest)
            ) {
              filteredRecipesWithRequest.push(filteredRecipes[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipesWithRequest;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        } else {
          // Ou si la recherche est inférieur à 2 caractères
          for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
            const ingredientArray = [];
            const { ingredients } = this.recipesStates.initialState[i];
            const ustensilsArray = [];
            const { ustensils } = this.recipesStates.initialState[i];
            const { appliance } = this.recipesStates.initialState[i];

            for (let j = 0; j < ingredients.length; j += 1) {
              ingredientArray.push(ingredients[j].ingredient);
            }

            for (let j = 0; j < ustensils.length; j += 1) {
              ustensilsArray.push(ustensils[j]);
            }

            const allElementsArray = ingredientArray.concat(ustensilsArray);
            allElementsArray.push(appliance);
            const allElementsArrayLowercase = [];
            for (let i = 0; i < allElementsArray.length; i += 1) {
              allElementsArrayLowercase.push(allElementsArray[i].toLowerCase());
            }
            // const allElementsArrayLowercase = allElementsArray.map((elm) =>
            //   elm.toLowerCase()
            // );

            if (
              this.recipesStates.selectedTags.every((val) =>
                allElementsArrayLowercase.join(" ").includes(val)
              )
            ) {
              filteredRecipes.push(this.recipesStates.initialState[i]);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        }
        // Si il n'y a pas d'éléments ds le tableau de tag selectionnés
      } else if (!this.recipesStates.selectedTags.length) {
        // Et si la recherche est supérieur à 2 caractères
        if (searchRequest.length > 2) {
          for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
            const ingredientArray = [];
            const ingredients = this.recipesStates.initialState[i].ingredients;
            const name = this.recipesStates.initialState[i].name;
            const description = this.recipesStates.initialState[i].description;

            for (let j = 0; j < ingredients.length; j += 1) {
              ingredientArray.push(ingredients[j].ingredient);
            }

            if (
              ingredientArray.join(" ").toLowerCase().includes(searchRequest) ||
              name.toLowerCase().includes(searchRequest) ||
              description.toLowerCase().includes(searchRequest)
            ) {
              filteredRecipes.push(this.recipesStates.initialState[i]);
              // console.log(filteredRecipes);
            }
          }
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
