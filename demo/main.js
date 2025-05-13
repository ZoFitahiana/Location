const readline = require("readline-sync");

const TypeProduit = require("./domain/TypeProduit");
const Produit = require("./domain/Produit");
const ReservationService = require("./service/ReservationService");

const produits = [];
let id = 1;


for (const type in TypeProduit) {
  const prix = 50 + Math.floor(Math.random() * 100);
  produits.push(new Produit(id++, TypeProduit[type], prix));
}

const reservationService = new ReservationService();
let continuer = true;

while (continuer) {
  console.log("\n--- Liste des produits ---");
  produits.forEach((p) => p.afficher());

  const choix = parseInt(readline.question("Entrez le numéro du produit à réserver : "), 10);
  const produit = produits.find((p) => p.id === choix);

  if (!produit) {
    console.log(" Produit introuvable. Fin du programme.");
    break;
  }

  try {
    const duree = parseInt(readline.question("Durée (en jours) : "), 10);
    const res = reservationService.reserver(produit, duree);
    console.log(res.toString());
  } catch (e) {
    console.log(e.message);
  }

  const suite = readline.question("Voulez-vous continuer ? (oui/non) : ").toLowerCase();
  if (suite !== "oui") continuer = false;
}

console.log("Fin du programme.");
