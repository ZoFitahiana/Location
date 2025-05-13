#ifndef RESERVATION_H
#define RESERVATION_H

#include "../domain/produit.h"

typedef struct {
    Produit* produit;
    int duree;
} Reservation;

#endif
