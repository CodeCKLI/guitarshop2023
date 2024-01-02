package com.ckdev.guitarshop_api.controllers;

import com.ckdev.guitarshop_api.controllers.Types.OrderRequest;
import com.ckdev.guitarshop_api.controllers.Types.OrderResponse;
import com.ckdev.guitarshop_api.services.Impl.OrderServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Log
@RequiredArgsConstructor
public class OrderController {

    private final OrderServiceImpl orderService;

    @PostMapping("/api/public/order/create")
    public ResponseEntity<OrderResponse> createOrder(
            @RequestBody OrderRequest request
    ) {
        return ResponseEntity.ok(orderService.creatOrder(request));
    }

    @PostMapping("/api/public/order/update")
    public ResponseEntity<OrderResponse> updateOrder(
            @RequestBody OrderRequest request
    ) {
        return ResponseEntity.ok(orderService.updateOrder(request));
    }

}
