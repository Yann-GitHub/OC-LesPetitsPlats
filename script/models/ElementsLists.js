// Class permettant de récuperer les datas sous forme d'array pour chq Combobox (ingrédients, appareils, ustensiles)
// Les arrays sont sans doublon, classé par ordre alphabétique et la première lettre est en majuscule
export default class ElementsList {
  constructor(recipes) {
    this.recipes = recipes;
  }

  getCapitalized(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Récupération de tous les ingredients contenus dans recipes.js
  // On supprime les doublons via un Set (liste sans doublon) puis on reconvertit en array
  // Première lettre en majuscule via la methode getCapitalized() et classé alphabétiquement via la méthode sort()
  getAllIngredients() {
    const AllIngredients = new Set();

    for (let i = 0; i < this.recipes.length; i += 1) {
      for (let j = 0; j < this.recipes[i].ingredients.length; j += 1) {
        AllIngredients.add(
          this.getCapitalized(this.recipes[i].ingredients[j].ingredient)
        );
      }
    }

    return [...AllIngredients].sort();
  }

  // Récupération de tous les appareils contenus dans recipes.js
  // On supprime les doublons via un Set (liste sans doublon) puis on reconvertit en array
  // Première lettre en majuscule via la methode getCapitalized() et classé alphabétiquement via la méthode sort()
  getAllAppliances() {
    const AllAppliances = new Set();

    for (let i = 0; i < this.recipes.length; i += 1) {
      AllAppliances.add(this.getCapitalized(this.recipes[i].appliance));
    }

    return [...AllAppliances].sort();
  }

  // Récupération de tous les ustensiles contenus dans recipes.js
  // On supprime les doublons via un Set (liste sans doublon) puis on reconvertit en array
  // Première lettre en majuscule via la methode getCapitalized() et classé alphabétiquement via la méthode sort()
  getAllUstensils() {
    const AllUstensils = new Set();

    for (let i = 0; i < this.recipes.length; i += 1) {
      for (let j = 0; j < this.recipes[i].ustensils.length; j += 1) {
        AllUstensils.add(this.getCapitalized(this.recipes[i].ustensils[j]));
      }
    }
    return [...AllUstensils].sort();
  }
}
