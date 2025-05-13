import { Produit } from '../domain/Produit';
import { Reservation } from '../reservation/Reservation';
import { ProduitIndisponibleException } from '../exception/ProduitIndisponibleException';

export class ReservationService {
  reserver(produit: Produit, date: Date, duree: number): Reservation {
    if (!produit.disponible) {
      throw new ProduitIndisponibleException(`${produit.type} n'est plus disponible.`);
    }

    produit.disponible = false;
    return new Reservation(produit, date, duree);
  }
}
