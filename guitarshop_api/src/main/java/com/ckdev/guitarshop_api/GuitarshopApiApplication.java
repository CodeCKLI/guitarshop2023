package com.ckdev.guitarshop_api;

import com.ckdev.guitarshop_api.models.Entities.AppUserEntity;
import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.models.Entities.OrderEntity;
import com.ckdev.guitarshop_api.repositories.AppUserRepo;
import com.ckdev.guitarshop_api.repositories.GuitarRepo;
import com.ckdev.guitarshop_api.repositories.OrderRepo;
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
	private final AppUserRepo appuserRepoObj;
	private final OrderRepo orderRepoObj;


    public GuitarshopApiApplication(DataSource dataSource,
									GuitarRepo guitarRepo,
									AppUserRepo appuserRepo,
									OrderRepo orderRepo
									) {
        this.dataSource = dataSource;
		this.guitarRepoObj = guitarRepo;
		this.appuserRepoObj = appuserRepo;
		this.orderRepoObj = orderRepo;
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
				.cover_URL("src/assets/fender70strat.jpg")
				.price(799.99)
				.colorOptions(Arrays.asList("black"))
				.pictures(Arrays.asList("src/assets/fender70strats1.jpg",
						"src/assets/fender70strats2.jpg",
						"src/assets/fender70strats3.jpg"))
				.bodyColor("black")
				.build();

		GuitarEntity guitarB = GuitarEntity.builder()
				.model("SG Classic Worn P-90s")
				.brand("Epiphone")
				.description("Epiphone's SG Classic Worn, part of the Inspired by Gibson™ Collection, features a  finish, P-90 PRO™ pickups, and comes in Worn Cherry and Worn Inverness Green.")
				.cover_URL("src/assets/epiphonesgred.png")
				.price(429.99)
				.colorOptions(Arrays.asList("red", "green"))
				.pictures(Arrays.asList("src/assets/epiphonesgred1.png",
						"src/assets/epiphonesgred2.png",
						"src/assets/epiphonesgred3.png"))
				.bodyColor("red")
				.build();

		GuitarEntity guitarD = GuitarEntity.builder()
				.model("SG Classic Worn P-90s")
				.brand("Epiphone")
				.description("Epiphone's SG Classic Worn, part of the Inspired by Gibson™ Collection, features a  finish, P-90 PRO™ pickups, and comes in Worn Cherry and Worn Inverness Green.")
				.cover_URL("src/assets/epiphonesggreen.png")
				.price(429.99)
				.colorOptions(Arrays.asList("red", "green"))
				.pictures(Arrays.asList("src/assets/epiphonesggreen1.png",
						"src/assets/epiphonesggreen2.png",
						"src/assets/epiphonesggreen3.png"))
				.bodyColor("green")
				.build();

		GuitarEntity guitarC = GuitarEntity.builder()
				.model("RG8870")
				.brand("Ibanez")
				.description("Ibanez guitar boasts Super Wizard AS neck, j.custom design, Macassar Ebony fretboard, chambered body, DiMarzio pickups, Lo-Pro Edge tremolo, and versatile features.")
				.cover_URL("src/assets/ibanezrg.png")
				.price(1299.79)
				.colorOptions(Arrays.asList("grey"))
				.pictures(Arrays.asList("src/assets/ibanezrg1.png",
						"src/assets/ibanezrg2.png",
						"src/assets/ibanezrg3.png"))
				.bodyColor("grey")
				.build();

		AppUserEntity appuserOne = AppUserEntity.builder()
				.email("matt@matt.com")
				.firstname("Matt")
				.lastname("Li")
				.password("$2a$10$PbgBAHBchabk0Z3Rkib7XOI8c2ELKaiJ6EqIpHWkvaKa1VREqmFyW")
				.build();

		OrderEntity orderOne = OrderEntity.builder()
				.customerEmail("testing@email.com")
				.customerFirstName("TestingFirst")
				.customerLastName("TestingLast")
				.customerPhone("6661234321")
				.customerCountry("USA")
				.customerAddress("123 ABC Dr")
				.customerCity("NYC")
				.customerPostal("123321")
				.paymentMethod("visa")
				.cardNumber("4242 4242 4242 4242")
				.cardCSV("242")
				.appuser(null)
				.status("Penning")
				.guitarList("[{\"id\":2,\"model\":\"SG Classic Worn P-90s\",\"bodyColor\":\"red\",\"amount\":4,\"price\":429.99,\"coverURL\":\"src/assets/guitarpics/epiphonesgred.png\",\"brand\":\"Epiphone\"},{\"id\":4,\"model\":\"SG Classic Worn P-90s\",\"bodyColor\":\"green\",\"amount\":4,\"price\":429.99,\"coverURL\":\"src/assets/guitarpics/epiphonesggreen.png\",\"brand\":\"Epiphone\"},{\"id\":3,\"model\":\"RG8870\",\"bodyColor\":\"grey\",\"amount\":1,\"price\":1299.79,\"coverURL\":\"src/assets/guitarpics/ibanezrg.png\",\"brand\":\"Ibanez\"}]")
				.tax(123.00)
				.shipping(5.00)
				.total(1234.00)
				.build();


		guitarRepoObj.save(guitarA);
		guitarRepoObj.save(guitarB);
		guitarRepoObj.save(guitarC);
		guitarRepoObj.save(guitarD);

		appuserRepoObj.save(appuserOne);

//		orderRepoObj.save(orderOne);


	}
}
