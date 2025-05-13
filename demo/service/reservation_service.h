#ifndef RESERVATION_SERVICE_H
#define RESERVATION_SERVICE_H

#include "../reservation/reservation.h"
#include "../exception/produit_indisponible.h"

int reserverProduit(Produit* produit, int duree, Reservation* res);

#endif
