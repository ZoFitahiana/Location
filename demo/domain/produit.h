#ifndef PRODUIT_H
#define PRODUIT_H

#include "types.h"

typedef struct {
    int id;
    TypeProduit type;
    EtatProduit etat;
    int prix;
} Produit;

const char* getTypeProduitString(TypeProduit type);
void afficherProduit(const Produit* p);

#endif
