#include <stdio.h>
#include <string.h>
#include <stdlib.h>

#include "domain/produit.h"
#include "reservation/reservation.h"
#include "service/reservation_service.h"
#include "exception/produit_indisponible.h"

#define MAX_PRODUITS 10

int main() {
    Produit produits[MAX_PRODUITS];
    int nbProduits = 0;

    for (int i = 0; i < NB_TYPES; i++) {
        produits[i].id = i + 1;
        produits[i].type = (TypeProduit)i;
        produits[i].etat = DISPONIBLE;
        produits[i].prix = 50 + i * 25;
        nbProduits++;
    }

    int continuer = 1;
    char buffer[10];

    while (continuer) {
        printf("Liste des produits disponibles :\n");
        for (int i = 0; i < nbProduits; i++) {
            afficherProduit(&produits[i]);
        }

        int choix;
        printf("Entrez le numéro du produit à réserver : ");
        scanf("%d", &choix);

        if (choix < 1 || choix > nbProduits) {
            printf("Numéro invalide. Fin du programme.\n");
            break;
        }

        Produit* p = &produits[choix - 1];

        if (p->etat == INDISPONIBLE) {
            printf("%s\n", MESSAGE_INDISPONIBLE);
        } else {
            int duree;
            printf("Entrez la durée en jours : ");
            scanf("%d", &duree);

            Reservation res;
            if (reserverProduit(p, duree, &res)) {
                printf("Réservation confirmée pour %s (%d jours)\n", getTypeProduitString(p->type), duree);
            }
        }

        printf("Continuer ? (oui/non) : ");
        scanf("%s", buffer);
        if (strcmp(buffer, "non") == 0) {
            continuer = 0;
        }
    }

    printf("Fin du programme.\n");
    return 0;
}
