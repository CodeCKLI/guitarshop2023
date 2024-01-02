package com.ckdev.guitarshop_api.repositories;

import com.ckdev.guitarshop_api.models.Entities.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepo extends JpaRepository<OrderEntity, Long> {


}
