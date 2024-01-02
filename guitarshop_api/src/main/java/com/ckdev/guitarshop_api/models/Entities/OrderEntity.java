package com.ckdev.guitarshop_api.models.Entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer id;

    private String CustomerEmail;
    private String CustomerFirstName;
    private String CustomerLastName;
    private String CustomerPhone;

    private Integer CustomerID;


}
