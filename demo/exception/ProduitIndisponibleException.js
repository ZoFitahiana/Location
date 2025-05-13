class ProduitIndisponibleException extends Error {
  constructor(message) {
    super(message);
    this.name = "ProduitIndisponibleException";
  }
}

module.exports = ProduitIndisponibleException;
