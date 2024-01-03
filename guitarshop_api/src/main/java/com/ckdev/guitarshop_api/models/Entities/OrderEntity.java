package com.ckdev.guitarshop_api.models.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "orders")
public class OrderEntity {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
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

    @Column(columnDefinition = "varchar(255) default 'penning'")
    private String status;

    @ManyToOne
    @ToString.Exclude
    private AppUserEntity appuser;

    @Column(columnDefinition="text")
    private String guitarList;

    private Double tax;
    private Double shipping;
    private Double total;

}
