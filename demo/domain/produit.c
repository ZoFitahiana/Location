#include "produit.h"
#include <stdio.h>

const char* getTypeProduitString(TypeProduit type) {
    switch (type) {
        case VOITURE: return "Voiture";
        case MAISON: return "Maison";
        case MOTO: return "ASSIETTE";
        default: return "Inconnu";
    }
}

void afficherProduit(const Produit* p) {
    printf("%d. %s - %d€ - %s\n", p->id, getTypeProduitString(p->type), p->prix,
           p->etat == DISPONIBLE ? "Disponible" : "Indisponible");
}
