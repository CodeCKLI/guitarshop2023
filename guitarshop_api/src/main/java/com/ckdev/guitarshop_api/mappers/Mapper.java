package com.ckdev.guitarshop_api.mappers;

import com.ckdev.guitarshop_api.models.DTOs.OrderDTO;
import com.ckdev.guitarshop_api.models.Entities.OrderEntity;

public interface Mapper<E, D> {

    D mapToDTO(E e);

    E mapToEntity(D d);

}
