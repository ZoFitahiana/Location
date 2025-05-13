package com.location.demo.reservation;

import com.location.demo.domain.Produit;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.ToString;

import java.time.LocalDate;

@Getter
@ToString
@AllArgsConstructor
public class Reservation {
    private Produit produit;
    private LocalDate dateDebut;
    private int duree;
}

