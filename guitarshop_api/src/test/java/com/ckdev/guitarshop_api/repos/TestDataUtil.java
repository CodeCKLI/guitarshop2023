package com.ckdev.guitarshop_api.repos;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;

import java.util.Arrays;

public class TestDataUtil {

    public TestDataUtil() {
    }

    public static GuitarEntity createTestGuitarA() {
        return GuitarEntity.builder()
                .model("70TH ANNIVERSARY PLAYER STRATOCASTER®")
                .brand("Fender")
                .description("Celebrate 70 years of Fender Stratocaster excellence with the 70th Anniversary Collection. From vintage charm to modern innovation, each model offers iconic style, rich tones, and limited availability.")
                .cover_URL("https://www.fmicassets.com/Damroot/ZoomJpg/10019/0147040397_fen_ins_cbr_1_nr.jpg")
                .price(799.99)
                .colorOptions(Arrays.asList("red", "green"))
                .pictures(Arrays.asList("src/assets/guitarpics/fender70strats1.jpg",
                        "src/assets/guitarpics/fender70strats2.jpg",
                        "src/assets/guitarpics/fender70strats3.jpg"))
                .bodyColor("black")
                .build();
    }

    public static GuitarEntity createTestGuitarB() {
        return GuitarEntity.builder()
                .model("SG Classic Worn P-90s")
                .brand("Epiphone")
                .description("Epiphone's SG Classic Worn, part of the Inspired by Gibson™ Collection, features a  finish, P-90 PRO™ pickups, and comes in Worn Cherry and Worn Inverness Green.")
                .cover_URL("https://images.ctfassets.net/m8onsx4mm13s/35DcjM91YqSpTkE72nbWxh/5d28fb2a8db63f210ae10a69c083fe59/__static.gibson.com_product-images_Epiphone_EPI9YL50_Worn_Cherry_EGS9CWCHNH1_front.jpg")
                .price(429.99)
                .colorOptions(Arrays.asList("red", "black"))
                .pictures(Arrays.asList("src/assets/guitarpics/epiphonesgred1.png",
                        "src/assets/guitarpics/epiphonesgred2.png",
                        "src/assets/guitarpics/epiphonesgred3.png"))
                .bodyColor("red")
                .build();
    }

    public static GuitarEntity createTestGuitarC() {
        return GuitarEntity.builder()
                .model("RG8870")
                .brand("Ibanez")
                .description("Ibanez guitar boasts Super Wizard AS neck, j.custom design, Macassar Ebony fretboard, chambered body, DiMarzio pickups, Lo-Pro Edge tremolo, and versatile features.")
                .cover_URL("https://www.ibanez.com/common/product_artist_file/file/p_region_RG8870_BRE_00_01_sub_1.jpg")
                .price(1299.79)
                .colorOptions(Arrays.asList("black"))
                .pictures(Arrays.asList("src/assets/guitarpics/ibanezrg1.png",
                        "src/assets/guitarpics/ibanezrg2.png",
                        "src/assets/guitarpics/ibanezrg3.png"))
                .bodyColor("grey")
                .build();
    }
}

