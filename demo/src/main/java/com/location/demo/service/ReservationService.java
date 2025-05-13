package com.location.demo.service;

import com.location.demo.domain.EtatProduit;
import com.location.demo.domain.Produit;
import com.location.demo.exception.ProduitIndisponibleException;
import com.location.demo.reservation.Reservation;

import java.time.LocalDate;


public class ReservationService {
    public Reservation reserver(Produit produit, LocalDate dateDebut, int duree) {
        if (produit.getEtat() != EtatProduit.DISPONIBLE) {
            throw new ProduitIndisponibleException("Produit " + produit.getType() + " n'est plus disponible.");
        }

        produit.setEtat(EtatProduit.INDISPONIBLE);
        return new Reservation(produit, dateDebut, duree);
    }
}

