import { TypeProduit } from './TypeProduit';

export class Produit {
  constructor(
    public id: number,
    public type: TypeProduit,
    public prix: number,
    public disponible: boolean = true
  ) {}

  toString(): string {
    return `${this.id}. ${this.type} - ${this.prix}€ - ${this.disponible ? 'Disponible' : 'Indisponible'}`;
  }
}
