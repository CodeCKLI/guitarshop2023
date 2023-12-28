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
    private String model;
    private String brand;
    private String description;
    private String cover_URL;
    private Double price;
    private List<String> colorOptions;
    private List<String> pictures;
    private String bodyColor;

}
