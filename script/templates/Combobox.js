// Class permettant de créer les templates HTML des combobox
// Elle prends en paramètres les datas correspondants (elements, id, color, type)
export default class Combobox {
  constructor(allElements, id, color, type) {
    this.allElements = allElements;
    this.id = id;
    this.color = color;
    this.type = type;
  }

  // Methode qui convertit les datas en éléments <li> via une loop for
  getComboboxList(elements) {
    let comboboxIngredientsList = ``;

    for (let i = 0; i < elements.length; i += 1) {
      let li = document.createElement("li");
      li.classList.add("combobox-list-item");

      li = `
        <li class="combobox-list-item">${elements[i]}</li>
        `;

      comboboxIngredientsList += li;
    }
    return comboboxIngredientsList;
  }

  // Methode en charge de la création du template HTML correspondant à chq Combobox via les paramètres correspondant
  createCombobox() {
    const templateCombobox = `
    <button class="combobox-btn ${this.color}" id="combobox-btn-${this.id}">
      ${this.type}s
      <i class="fas fa-chevron-down"></i>
    </button>
    <div class="combobox-container hidden" id="combobox-container-${this.id}">
      <form action="" method="" class="combobox-form">
        <input
          class="combobox-input ${this.color}"
          type="text"
          placeholder="Rechercher un ${this.type.toLowerCase()}"
        />
        <span class="combobox-input-icon">
          <i class="fas fa-chevron-up"></i>
        </span>
      </form>
      <ul class="combobox-list ${this.color}">
        ${this.getComboboxList(this.allElements)}
      </ul>
    </div>
    `;

    return templateCombobox;
  }

  // Methode en charge d'ajouter les eventListener des Combobox (open et close)
  eventListenerCombobox() {
    const allBtnOpen = document.querySelectorAll(".combobox-btn");
    const allBtnClose = document.querySelectorAll(".combobox-input-icon");

    allBtnOpen.forEach((el) => {
      el.addEventListener("click", () => {
        this.allComboboxClosed();
        el.classList.add("hidden");
        el.nextElementSibling.classList.remove("hidden");
      });
    });

    allBtnClose.forEach((el) => {
      el.addEventListener("click", () => {
        el.parentElement.parentElement.classList.add("hidden");
        el.parentElement.parentElement.previousElementSibling.classList.remove(
          "hidden"
        );
      });
    });
  }

  // Methode permettant de n'avoir qu'un seul Combobox ouvert à la fois
  allComboboxClosed() {
    const allCombobox = document.querySelectorAll(".combobox-container");

    for (let i = 0; i < allCombobox.length; i++) {
      if (!allCombobox[i].classList.contains("hidden")) {
        allCombobox[i].classList.add("hidden");
        allCombobox[i].previousElementSibling.classList.remove("hidden");
      }
    }
  }
}
