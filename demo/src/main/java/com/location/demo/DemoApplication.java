package com.location.demo;


import com.location.demo.domain.Produit;
import com.location.demo.domain.TypeProduit;
import com.location.demo.reservation.Reservation;
import com.location.demo.service.ReservationService;
import com.location.demo.exception.ProduitIndisponibleException;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.time.LocalDate;
import java.util.*;

@SpringBootApplication
public class DemoApplication implements CommandLineRunner {

	private final Scanner scanner = new Scanner(System.in);
	private final List<Produit> produits = new ArrayList<>();
	private final ReservationService reservationService = new ReservationService();

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Override
	public void run(String... args) {
		System.out.println(" Application de réservation démarrée !");
		initProduits();

		boolean continuer = true;

		while (continuer) {
			afficherProduitsDisponibles();
			int choix = demanderChoixProduit();

			Optional<Produit> produitChoisi = produits.stream()
					.filter(p -> p.getId() == choix)
					.findFirst();

			if (produitChoisi.isEmpty()) {
				System.out.println(" Numéro invalide. Programme terminé.");
				return;
			}

			Produit produit = produitChoisi.get();

			try {
				System.out.print(" Entrez la durée (en jours) : ");
				int duree = Integer.parseInt(scanner.nextLine());

				Reservation res = reservationService.reserver(produit, LocalDate.now(), duree);
				System.out.println(" Réservation effectuée : " + res);
			} catch (ProduitIndisponibleException e) {
				System.out.println(e.getMessage());
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}

			System.out.println("Voulez-vous continuer ? (oui/non)");
			continuer = scanner.nextLine().equalsIgnoreCase("oui");
		}

		System.out.println("Fin du programme.");
	}

	private void initProduits() {
		int id = 1;
		for (TypeProduit type : TypeProduit.values()) {
			produits.add(new Produit(id++, type, 50 + new Random().nextInt(100)));
		}
	}

	private void afficherProduitsDisponibles() {
		System.out.println("\n Liste des produits disponibles :");
		produits.forEach(System.out::println);
		System.out.println();
	}

	private int demanderChoixProduit() {
		System.out.print("Entrez le numéro du produit que vous voulez réserver : ");
		try {
			return Integer.parseInt(scanner.nextLine());
		} catch (NumberFormatException e) {
			return -1;
		}
	}
}
