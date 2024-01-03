package com.ckdev.guitarshop_api.controllers.Types;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {

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

    private String status;

    private String guitarList;

    private Double tax;
    private Double shipping;
    private Double total;

}
