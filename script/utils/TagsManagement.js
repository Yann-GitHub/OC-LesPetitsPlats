// Class en charge des eventListeners et des comportements de chq tag dans les listes (ingredients, ustensiles, appareils)
// Egalement en charge des eventlistenrs et des comportements pour la fermeture des tags ds la liste des tags selectionnés
// Le constructeur prend en paramètre la liste des recettes, ses différents états et la liste des tags selectionnés
export default class TagsManagement {
  constructor(recipesStates) {
    this.recipesStates = recipesStates;
  }

  // Methode appelée au sein de la méthode "eventListenerTags"
  // Elle gère la création des templates HTML pour les tags selectionnés
  // Ainsi que les eventlisteners de fermeture et leurs comportements (appel methode "eventListenerSelectedTagsBtnClose")
  createSelectedTag(type, color, name) {
    const div = document.createElement("div");
    div.classList.add("selected-tag");
    div.classList.add(`selected-tag-${type}`);
    div.classList.add(`${color}`);

    const spanName = document.createElement("span");
    spanName.classList.add("selected-tag-name");
    spanName.textContent = `${name}`;

    const spanDelete = document.createElement("span");
    spanDelete.classList.add("selected-tag-delete");

    const iconeClose = document.createElement("i");
    iconeClose.classList.add("far", "fa-times-circle", "delete-icone");

    spanDelete.appendChild(iconeClose);

    div.appendChild(spanName);
    div.appendChild(spanDelete);

    this.eventListenerSelectedTagsBtnClose(iconeClose, type, name);

    return div;
  }

  // Méthode en charge de créer les eventlisteners et leurs comportements pour chq tags ds les listes
  eventListenerTags() {
    const selectedTagsContainer = document.getElementById(
      "selected-tag-container"
    );
    const allTagsIngredients = document.querySelectorAll(
      ".combobox-list-item-ingredients"
    );
    const allTagsUstensils = document.querySelectorAll(
      ".combobox-list-item-ustensils"
    );
    const allTagsAppliances = document.querySelectorAll(
      ".combobox-list-item-appliances"
    );

    // Création des eventListener et de leurs comportement en fonction du type de tag (ingredients, appliances, ustensils)
    allTagsIngredients.forEach((el) => {
      el.addEventListener("click", (event) => {
        const tagValue = event.target.innerText.toLowerCase();
        this.recipesStates.selectedTags.push(tagValue);
        selectedTagsContainer.appendChild(
          this.createSelectedTag("ingredients", "blue", tagValue)
        );

        const filteredRecipes = [];
        if (!this.recipesStates.updatedState.length) {
          for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
            const ingredientArray = [];
            const { ingredients } = this.recipesStates.initialState[i];

            for (let j = 0; j < ingredients.length; j += 1) {
              ingredientArray.push(ingredients[j].ingredient);
            }

            if (ingredientArray.join(" ").toLowerCase().includes(tagValue)) {
              filteredRecipes.push(this.recipesStates.initialState[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        } else {
          for (let i = 0; i < this.recipesStates.updatedState.length; i += 1) {
            const ingredientArray = [];
            const { ingredients } = this.recipesStates.updatedState[i];

            for (let j = 0; j < ingredients.length; j += 1) {
              ingredientArray.push(ingredients[j].ingredient);
            }

            if (ingredientArray.join(" ").toLowerCase().includes(tagValue)) {
              filteredRecipes.push(this.recipesStates.updatedState[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        }
      });
    });

    allTagsUstensils.forEach((el) => {
      el.addEventListener("click", (event) => {
        const tagValue = event.target.innerText.toLowerCase();
        this.recipesStates.selectedTags.push(tagValue);
        selectedTagsContainer.appendChild(
          this.createSelectedTag("ustensils", "red", tagValue)
        );

        const filteredRecipes = [];
        if (!this.recipesStates.updatedState.length) {
          for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
            const ustensilsArray = [];
            const { ustensils } = this.recipesStates.initialState[i];

            for (let j = 0; j < ustensils.length; j += 1) {
              ustensilsArray.push(ustensils[j]);
            }

            if (ustensilsArray.join(" ").toLowerCase().includes(tagValue)) {
              filteredRecipes.push(this.recipesStates.initialState[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        } else {
          for (let i = 0; i < this.recipesStates.updatedState.length; i += 1) {
            const ustensilsArray = [];
            const { ustensils } = this.recipesStates.updatedState[i];

            for (let j = 0; j < ustensils.length; j += 1) {
              ustensilsArray.push(ustensils[j]);
            }

            if (ustensilsArray.join(" ").toLowerCase().includes(tagValue)) {
              filteredRecipes.push(this.recipesStates.updatedState[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        }
      });
    });

    allTagsAppliances.forEach((el) => {
      el.addEventListener("click", (event) => {
        const tagValue = event.target.innerText.toLowerCase();
        this.recipesStates.selectedTags.push(tagValue);
        selectedTagsContainer.appendChild(
          this.createSelectedTag("appliances", "green", tagValue)
        );

        const filteredRecipes = [];
        if (!this.recipesStates.updatedState.length) {
          for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
            const { appliance } = this.recipesStates.initialState[i];

            if (appliance.toLowerCase().includes(tagValue)) {
              filteredRecipes.push(this.recipesStates.initialState[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        } else {
          // console.log(this.recipesStates.updatedState);
          for (let i = 0; i < this.recipesStates.updatedState.length; i += 1) {
            const { appliance } = this.recipesStates.updatedState[i];
            // console.log(appliance);

            if (appliance.toLowerCase().includes(tagValue)) {
              filteredRecipes.push(this.recipesStates.updatedState[i]);
              // console.log(filteredRecipes);
            }
          }
          this.recipesStates.updatedState = filteredRecipes;
          // console.log(this.recipesStates.updatedState);
          this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
        }
      });
    });
  }

  eventListenerSelectedTagsBtnClose(el, type, name) {
    el.addEventListener("click", () => {
      const allTagsByType = document.querySelectorAll(
        `.combobox-list-item-${type}`
      );
      el.parentElement.parentElement.remove();

      // Permet de faire réapparaitre le tag dans la liste en supprimant la class CSS "hide"
      Array.from(allTagsByType).forEach((tag) => {
        if (tag.innerText.toLowerCase() === name.toLowerCase()) {
          tag.classList.remove("hide");
        }
      });

      // Suppression du tag dans la liste des tags selectionnés
      this.recipesStates.selectedTags.splice(
        this.recipesStates.selectedTags.indexOf(name.toLowerCase()),
        1
      );

      const inputSearchBar = document.getElementById("search-input");
      const inputSearchBarValue = inputSearchBar.value;
      // console.log(inputSearchBarValue);

      const filteredRecipes = [];

      // Si il n'y pas d'élément dans le tableau des tags selectionné
      // On recalcule uniquement avec la valeur présente ds le champ de recherche principal
      if (!this.recipesStates.selectedTags.length) {
        for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
          const ingredientArray = [];
          const { ingredients } = this.recipesStates.initialState[i];
          const { name } = this.recipesStates.initialState[i];
          const { description } = this.recipesStates.initialState[i];

          for (let j = 0; j < ingredients.length; j += 1) {
            ingredientArray.push(ingredients[j].ingredient);
          }
          // console.log(ingredientArray.join(" ").toLowerCase());
          if (
            ingredientArray
              .join(" ")
              .toLowerCase()
              .includes(inputSearchBarValue) ||
            name.toLowerCase().includes(inputSearchBarValue) ||
            description.toLowerCase().includes(inputSearchBarValue)
          ) {
            filteredRecipes.push(this.recipesStates.initialState[i]);
            // console.log(filteredRecipes);
          }
        }
        this.recipesStates.updatedState = filteredRecipes;
        // console.log(this.recipesStates.updatedState);
        this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
      } else {
        // Ou si il y a des éléments dans le tableau des tags selectionnés
        // On recalcule d'abord les recettes en fonction de l'entrée dans le champ de recherche principale
        // Et on les stock temporairement dans le tableau filteredRecipes
        for (let i = 0; i < this.recipesStates.initialState.length; i += 1) {
          const ingredientArray = [];
          const { ingredients } = this.recipesStates.initialState[i];
          const { name } = this.recipesStates.initialState[i];
          const { description } = this.recipesStates.initialState[i];

          for (let j = 0; j < ingredients.length; j += 1) {
            ingredientArray.push(ingredients[j].ingredient);
          }
          // console.log(ingredientArray.join(" ").toLowerCase());
          if (
            ingredientArray
              .join(" ")
              .toLowerCase()
              .includes(inputSearchBarValue) ||
            name.toLowerCase().includes(inputSearchBarValue) ||
            description.toLowerCase().includes(inputSearchBarValue)
          ) {
            filteredRecipes.push(this.recipesStates.initialState[i]);
            // console.log(filteredRecipes);
          }
        }

        // Depuis le tableau filteredRecipes créé précédement (tableau temporaire)
        // on filtre uniquement les recettes qui contiennent tous les tags présents dans le tableau de tag selectionnés
        const filteredRecipesWithTags = [];
        for (let i = 0; i < filteredRecipes.length; i += 1) {
          const ingredientArray = [];
          const { ingredients } = filteredRecipes[i];
          const ustensilsArray = [];
          const { ustensils } = filteredRecipes[i];
          const { appliance } = filteredRecipes[i];

          for (let j = 0; j < ingredients.length; j += 1) {
            ingredientArray.push(ingredients[j].ingredient);
          }

          for (let j = 0; j < ustensils.length; j += 1) {
            ustensilsArray.push(ustensils[j]);
          }

          const allElementsArray = ingredientArray.concat(ustensilsArray);
          allElementsArray.push(appliance);
          const allElementsArrayLowercase = allElementsArray.map((elm) =>
            elm.toLowerCase()
          );
          // console.log(allElementsArrayLowercase);

          if (
            this.recipesStates.selectedTags.every((val) =>
              allElementsArrayLowercase.join(" ").includes(val)
            )
          ) {
            filteredRecipesWithTags.push(filteredRecipes[i]);
          }
        }
        // console.log(filteredRecipesWithTags);

        this.recipesStates.updatedState = filteredRecipesWithTags;
        // console.log(this.recipesStates.updatedState);
        this.recipesStates.updateRecipeList(this.recipesStates.updatedState);
      }
    });
  }
}
