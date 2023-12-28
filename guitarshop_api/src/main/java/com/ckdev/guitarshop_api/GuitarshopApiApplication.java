package com.ckdev.guitarshop_api;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.repositories.GuitarRepo;
import lombok.extern.java.Log;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.sql.DataSource;
import java.util.Arrays;


@SpringBootApplication
@Log
public class GuitarshopApiApplication implements CommandLineRunner {

	private final DataSource dataSource;
	private final GuitarRepo guitarRepoObj;


    public GuitarshopApiApplication(DataSource dataSource, GuitarRepo guitarRepo) {
        this.dataSource = dataSource;
		this.guitarRepoObj = guitarRepo;
    }

    public static void main(String[] args) {
		SpringApplication.run(GuitarshopApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		GuitarEntity guitarA = GuitarEntity.builder()
				.model("70TH ANNIVERSARY PLAYER STRATOCASTER®")
				.brand("Fender")
				.description("Celebrate 70 years of Fender Stratocaster excellence with the 70th Anniversary Collection. From vintage charm to modern innovation, each model offers iconic style, rich tones, and limited availability.")
				.cover_URL("src/assets/guitarpics/fender70strat.jpg")
				.price(799.99)
				.colorOptions(Arrays.asList("black"))
				.pictures(Arrays.asList("src/assets/guitarpics/fender70strats1.jpg",
						"src/assets/guitarpics/fender70strats2.jpg",
						"src/assets/guitarpics/fender70strats3.jpg"))
				.bodyColor("black")
				.build();

		GuitarEntity guitarB = GuitarEntity.builder()
				.model("SG Classic Worn P-90s")
				.brand("Epiphone")
				.description("Epiphone's SG Classic Worn, part of the Inspired by Gibson™ Collection, features a  finish, P-90 PRO™ pickups, and comes in Worn Cherry and Worn Inverness Green.")
				.cover_URL("src/assets/guitarpics/epiphonesgred.png")
				.price(429.99)
				.colorOptions(Arrays.asList("red", "green"))
				.pictures(Arrays.asList("src/assets/guitarpics/epiphonesgred1.png",
						"src/assets/guitarpics/epiphonesgred2.png",
						"src/assets/guitarpics/epiphonesgred3.png"))
				.bodyColor("red")
				.build();

		GuitarEntity guitarD = GuitarEntity.builder()
				.model("SG Classic Worn P-90s")
				.brand("Epiphone")
				.description("Epiphone's SG Classic Worn, part of the Inspired by Gibson™ Collection, features a  finish, P-90 PRO™ pickups, and comes in Worn Cherry and Worn Inverness Green.")
				.cover_URL("src/assets/guitarpics/epiphonesggreen.png")
				.price(429.99)
				.colorOptions(Arrays.asList("red", "green"))
				.pictures(Arrays.asList("src/assets/guitarpics/epiphonesggreen1.png",
						"src/assets/guitarpics/epiphonesggreen2.png",
						"src/assets/guitarpics/epiphonesggreen3.png"))
				.bodyColor("green")
				.build();

		GuitarEntity guitarC = GuitarEntity.builder()
				.model("RG8870")
				.brand("Ibanez")
				.description("Ibanez guitar boasts Super Wizard AS neck, j.custom design, Macassar Ebony fretboard, chambered body, DiMarzio pickups, Lo-Pro Edge tremolo, and versatile features.")
				.cover_URL("src/assets/guitarpics/ibanezrg.png")
				.price(1299.79)
				.colorOptions(Arrays.asList("grey"))
				.pictures(Arrays.asList("src/assets/guitarpics/ibanezrg1.png",
						"src/assets/guitarpics/ibanezrg2.png",
						"src/assets/guitarpics/ibanezrg3.png"))
				.bodyColor("grey")
				.build();

		guitarRepoObj.save(guitarA);
		guitarRepoObj.save(guitarB);
		guitarRepoObj.save(guitarC);
		guitarRepoObj.save(guitarD);


	}
}
