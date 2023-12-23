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

//		GuitarEntity guitarA = GuitarEntity.builder()
//				.guitar_model("70TH ANNIVERSARY PLAYER STRATOCASTER®")
//				.guitar_brand("Fender")
//				.guitar_description("Celebrate 70 years of Fender Stratocaster excellence with the 70th Anniversary Collection. From vintage charm to modern innovation, each model offers iconic style, rich tones, and limited availability.")
//				.guitar_cover_URL("https://www.fmicassets.com/Damroot/ZoomJpg/10019/0147040397_fen_ins_cbr_1_nr.jpg")
//				.guitar_price(799.99)
//				.guitar_colors(Arrays.asList("red", "green"))
//				.build();
//
//		GuitarEntity guitarB = GuitarEntity.builder()
//				.guitar_model("SG Classic Worn P-90s")
//				.guitar_brand("Epiphone")
//				.guitar_description("Epiphone's SG Classic Worn, part of the Inspired by Gibson™ Collection, features a  finish, P-90 PRO™ pickups, and comes in Worn Cherry and Worn Inverness Green.")
//				.guitar_cover_URL("https://images.ctfassets.net/m8onsx4mm13s/35DcjM91YqSpTkE72nbWxh/5d28fb2a8db63f210ae10a69c083fe59/__static.gibson.com_product-images_Epiphone_EPI9YL50_Worn_Cherry_EGS9CWCHNH1_front.jpg")
//				.guitar_price(429.99)
//				.guitar_colors(Arrays.asList("red", "black"))
//				.build();
//
//		GuitarEntity guitarC = GuitarEntity.builder()
//				.guitar_model("RG8870")
//				.guitar_brand("Ibanez")
//				.guitar_description("Ibanez guitar boasts Super Wizard AS neck, j.custom design, Macassar Ebony fretboard, chambered body, DiMarzio pickups, Lo-Pro Edge tremolo, and versatile features.")
//				.guitar_cover_URL("https://www.ibanez.com/common/product_artist_file/file/p_region_RG8870_BRE_00_01_sub_1.jpg")
//				.guitar_price(1299.79)
//				.guitar_colors(Arrays.asList("black"))
//				.build();
//
//		guitarRepoObj.save(guitarA);
//		guitarRepoObj.save(guitarB);
//		guitarRepoObj.save(guitarC);


	}
}
