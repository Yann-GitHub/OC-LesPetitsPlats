// Class en charge des eventlisteners et des comportement des Combobox (ouverture, fermeture et un seul combobox ouvert à la fois)
export default class ComboboxManagement {
  // constructor() {}

  eventListenerCombobox() {
    const allBtnOpen = document.querySelectorAll(".combobox-btn");
    const allBtnClose = document.querySelectorAll(".combobox-input-icon");

    allBtnOpen.forEach((el) => {
      el.addEventListener("click", () => {
        this.allComboboxClosed();
        el.classList.add("hidden");
        el.nextElementSibling.classList.remove("hidden");

        // Comportement liè à la saisie ds l'input des Combobox
        const allLi = el.nextElementSibling.getElementsByTagName("li");
        Array.from(allLi).forEach((elt) => {
          elt.classList.remove("hidden");
        });
      });
    });

    allBtnClose.forEach((el) => {
      el.addEventListener("click", () => {
        el.parentElement.parentElement.classList.add("hidden");
        el.parentElement.parentElement.previousElementSibling.classList.remove(
          "hidden"
        );
        el.parentElement.reset();
      });
    });
  }

  // Methode en charge de fermer tout les Combobox, permet lors de l'ouverture d'un Combobox de tous les fermer dans un premier temps et d'éviter
  // D'avoir plusieurs Combobox ouvert en même temps
  allComboboxClosed() {
    const allCombobox = document.querySelectorAll(".combobox-container");

    for (let i = 0; i < allCombobox.length; i += 1) {
      if (!allCombobox[i].classList.contains("hidden")) {
        allCombobox[i].classList.add("hidden");
        allCombobox[i].firstElementChild.reset();
        allCombobox[i].previousElementSibling.classList.remove("hidden");
      }
    }
  }
}
