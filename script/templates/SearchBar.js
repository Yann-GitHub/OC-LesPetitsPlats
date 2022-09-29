// Class permettant de créer le template HTML de la barre de recherche principale
export default class SearchBar {
  // constructor() {}

  createSearchBar() {
    const templateSearchBar = `
    <form action="" method="" class="form-search">
        <label for="search-input"></label>
        <input
          class="search-input"
          id="search-input"
          type="search"
          name="search-input"
          placeholder="Rechercher une recette"
          value=""
        />
        <span class="search-icon"><i class="fa fa-search"></i></span>
      </form>
    `;

    return templateSearchBar;
  }
}
