package com.location.demo.domain;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class Produit {
    private int id;
    private TypeProduit type;
    private EtatProduit etat;
    private double prixParJour;

    public Produit(int id, TypeProduit type, double prixParJour) {
        this.id = id;
        this.type = type;
        this.prixParJour = prixParJour;
        this.etat = EtatProduit.DISPONIBLE;
    }

    @Override
    public String toString() {
        return id + " - " + type + " (" + etat + ", " + prixParJour + "Ar/jour)";
    }
}

