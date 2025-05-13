class Reservation {
  constructor(produit, duree) {
    this.produit = produit;
    this.duree = duree;
    this.date = new Date();
  }

  toString() {
    return `Réservation de ${this.produit.type} pour ${this.duree} jour(s) à partir du ${this.date.toLocaleDateString()}`;
  }
}

module.exports = Reservation;
