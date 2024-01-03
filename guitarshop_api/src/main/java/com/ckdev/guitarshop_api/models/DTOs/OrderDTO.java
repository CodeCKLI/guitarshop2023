package com.ckdev.guitarshop_api.models.DTOs;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderDTO {

    private Long id;

    private String customerEmail;
    private String customerFirstName;
    private String customerLastName;
    private String customerPhone;

    private String customerCountry;
    private String customerAddress;
    private String customerCity;
    private String customerPostal;

    private String paymentMethod;
    private String cardNumber;
    private String cardCSV;

    private Integer appuser_id;

}
