export class ProduitIndisponibleException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ProduitIndisponibleException';
  }
}
