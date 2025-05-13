class Produit {
  constructor(id, type, prix) {
    this.id = id;
    this.type = type;
    this.prix = prix;
    this.disponible = true;
  }

  afficher() {
    console.log(
      `${this.id}. ${this.type} - ${this.prix}€ - ${this.disponible ? "Disponible" : "Indisponible"}`
    );
  }
}

module.exports = Produit;
