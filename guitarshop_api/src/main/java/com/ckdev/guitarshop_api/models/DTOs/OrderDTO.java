package com.ckdev.guitarshop_api.models.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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
