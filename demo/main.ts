import { Produit } from './domain/Produit';
import { TypeProduit } from './domain/TypeProduit';
import { ReservationService } from './service/ReservationService';
import * as readline from 'readline-sync';

const produits: Produit[] = [];
let id = 1;
Object.values(TypeProduit).forEach(type => {
  produits.push(new Produit(id++, type, 50 + Math.floor(Math.random() * 100)));
});

const reservationService = new ReservationService();
let continuer = true;

while (continuer) {
  console.log('\n--- Liste des produits ---');
  produits.forEach(p => console.log(p.toString()));

  const choix = readline.questionInt('\nQuel produit voulez-vous réserver (numéro) ? ');
  const produit = produits.find(p => p.id === choix);

  if (!produit) {
    console.log(' Numéro invalide. Fin du programme.');
    break;
  }

  const duree = readline.questionInt('Durée de réservation (en jours) : ');

  try {
    const res = reservationService.reserver(produit, new Date(), duree);
    console.log(` ${res}`);
  } catch (e) {
    console.log(e.message);
  }

  const reponse = readline.question('Continuer ? (oui/non) : ');
  continuer = reponse.toLowerCase() === 'oui';
}

console.log(' Fin du programme.');
