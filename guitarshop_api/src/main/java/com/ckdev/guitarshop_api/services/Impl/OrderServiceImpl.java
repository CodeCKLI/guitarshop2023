package com.ckdev.guitarshop_api.services.Impl;

import com.ckdev.guitarshop_api.controllers.Types.OrderRequest;
import com.ckdev.guitarshop_api.controllers.Types.OrderResponse;
import com.ckdev.guitarshop_api.mappers.Impl.OrderMapperImpl;
import com.ckdev.guitarshop_api.models.Entities.AppUserEntity;
import com.ckdev.guitarshop_api.models.Entities.OrderEntity;
import com.ckdev.guitarshop_api.repositories.OrderRepo;
import com.ckdev.guitarshop_api.repositories.AppUserRepo;
import com.ckdev.guitarshop_api.services.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepo orderRepo;
    private final AppUserRepo appUserRepo;
    private final OrderMapperImpl orderMapper;

    public OrderResponse creatOrder(OrderRequest orderToCreate){

        AppUserEntity foundUser = appUserRepo.findById(orderToCreate.getAppuser_id()).orElse(null);

        var order = OrderEntity.builder()
                .customerEmail(orderToCreate.getCustomerEmail())
                .customerFirstName(orderToCreate.getCustomerFirstName())
                .customerLastName(orderToCreate.getCustomerLastName())
                .customerPhone(orderToCreate.getCustomerPhone())
                .customerCountry(orderToCreate.getCustomerCountry())
                .customerAddress(orderToCreate.getCustomerAddress())
                .customerCity(orderToCreate.getCustomerCity())
                .customerPostal(orderToCreate.getCustomerPostal())
                .paymentMethod(orderToCreate.getPaymentMethod())
                .cardNumber(orderToCreate.getCardNumber())
                .cardCSV(orderToCreate.getCardCSV())
                .appuser(foundUser)
                .status(orderToCreate.getStatus())
                .build();

        orderRepo.save(order);
        return OrderResponse.builder().isSuccess(true).build();

    }

    @Override
    public OrderResponse updateOrder(OrderRequest orderToUpdate) {
        OrderEntity foundOrder =  orderRepo.findById(orderToUpdate.getId()).orElse(null);

        if(Objects.equals(foundOrder.getId(), orderToUpdate.getId())){

            AppUserEntity foundUser = appUserRepo.findById(orderToUpdate.getAppuser_id()).orElse(null);

            var order = OrderEntity.builder()
                    .id(orderToUpdate.getId())
                    .customerEmail(orderToUpdate.getCustomerEmail())
                    .customerFirstName(orderToUpdate.getCustomerFirstName())
                    .customerLastName(orderToUpdate.getCustomerLastName())
                    .customerPhone(orderToUpdate.getCustomerPhone())
                    .customerCountry(orderToUpdate.getCustomerCountry())
                    .customerAddress(orderToUpdate.getCustomerAddress())
                    .customerCity(orderToUpdate.getCustomerCity())
                    .customerPostal(orderToUpdate.getCustomerPostal())
                    .paymentMethod(orderToUpdate.getPaymentMethod())
                    .cardNumber(orderToUpdate.getCardNumber())
                    .cardCSV(orderToUpdate.getCardCSV())
                    .appuser(foundUser)
                    .status(orderToUpdate.getStatus())
                    .build();

            orderRepo.save(order);
            return OrderResponse.builder().isSuccess(true).build();
        }

        return OrderResponse.builder().isSuccess(false).build();
    }

}
