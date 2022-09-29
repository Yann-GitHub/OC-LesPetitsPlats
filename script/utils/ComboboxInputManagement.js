// Class en charge des eventListener et du comportement de chq input des Combobox
// Le constructeur prends en paramètre le type d'input et la liste de tag correspondante
export default class ComboboxInputManagement {
  constructor(inputType, allTags) {
    this.inputType = inputType;
    this.allTags = allTags;
  }

  // Methode en charge du comportement de l'input
  // Au moment de la saisie tous les tags qui ne correspondent pas à la requête sont cachés via la class CSS "hidden"
  // Class "hidden" = display none
  eventListenerCombobox() {
    this.inputType.addEventListener("keyup", (event) => {
      const inputRequest = event.target.value.toLowerCase();
      const items = this.allTags.getElementsByTagName("li");

      Array.from(items).forEach((item) => {
        const itemName = item.textContent;
        if (!itemName.toLowerCase().includes(inputRequest)) {
          item.classList.add("hidden");
        } else {
          item.classList.remove("hidden");
        }
      });
    });
  }
}
