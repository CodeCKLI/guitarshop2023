package com.ckdev.guitarshop_api.services;

import com.ckdev.guitarshop_api.controllers.Types.OrderRequest;
import com.ckdev.guitarshop_api.controllers.Types.OrderResponse;
import com.ckdev.guitarshop_api.models.Entities.OrderEntity;
import org.hibernate.query.Order;

import java.util.List;

public interface OrderService {

    OrderResponse creatOrder(OrderRequest orderToCreate);

    OrderResponse updateOrder(OrderRequest orderToUpdate);

    List<OrderEntity> findAllOrders();

    List<OrderEntity> findOrderByAppuser_id(Integer appuserID);

}
