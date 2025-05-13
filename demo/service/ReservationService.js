const ProduitIndisponibleException = require("../exception/ProduitIndisponibleException");
const Reservation = require("../reservation/Reservation");

class ReservationService {
  reserver(produit, duree) {
    if (!produit.disponible) {
      throw new ProduitIndisponibleException("Ce produit n'est plus disponible.");
    }

    produit.disponible = false;
    return new Reservation(produit, duree);
  }
}

module.exports = ReservationService;
