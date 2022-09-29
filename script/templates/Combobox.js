// Class permettant de créer les templates HTML des Combobox
// Elle prends en paramètres les infos correspondants (id, color, type)
export default class Combobox {
  constructor(id, color, type) {
    this.id = id;
    this.color = color;
    this.type = type;
  }

  // Methode en charge de la création du template HTML correspondant à chq Combobox avec les paramètres correspondant
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
          id="combobox-input-${this.id}"
          type="text"
          placeholder="Rechercher un ${this.type.toLowerCase()}"
        />
        <span class="combobox-input-icon">
          <i class="fas fa-chevron-up"></i>
        </span>
      </form>
      <ul class="combobox-list ${this.color}" id="combobox-list-${this.id}">
      </ul>
    </div>
    `;

    return templateCombobox;
  }
}
