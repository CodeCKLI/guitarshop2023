package com.ckdev.guitarshop_api.models.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "guitars")
public class GuitarEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    private String guitar_model;
    private String guitar_brand;
    private String guitar_description;
    private String guitar_cover_URL;
    private Double guitar_price;
    private List<String> guitar_colors;

}
