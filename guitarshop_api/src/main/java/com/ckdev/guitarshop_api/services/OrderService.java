package com.ckdev.guitarshop_api.services;

import com.ckdev.guitarshop_api.controllers.Types.OrderRequest;
import com.ckdev.guitarshop_api.controllers.Types.OrderResponse;

public interface OrderService {

    OrderResponse creatOrder(OrderRequest orderToCreate);

    OrderResponse updateOrder(OrderRequest orderToUpdate);

}
