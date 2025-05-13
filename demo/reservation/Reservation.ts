import { Produit } from '../domain/Produit';

export class Reservation {
  constructor(
    public produit: Produit,
    public dateReservation: Date,
    public duree: number
  ) {}

  toString(): string {
    return `Réservation confirmée de ${this.produit.type} pour ${this.duree} jours à partir du ${this.dateReservation.toLocaleDateString()}`;
  }
}
