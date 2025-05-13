#include "reservation_service.h"

int reserverProduit(Produit* produit, int duree, Reservation* res) {
    if (produit->etat == INDISPONIBLE) {
        return 0;
    }

    produit->etat = INDISPONIBLE;
    res->produit = produit;
    res->duree = duree;
    return 1;
}
