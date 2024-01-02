package com.ckdev.guitarshop_api.mappers.Impl;

import com.ckdev.guitarshop_api.mappers.Mapper;
import com.ckdev.guitarshop_api.models.DTOs.OrderDTO;
import com.ckdev.guitarshop_api.models.Entities.OrderEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class OrderMapperImpl implements Mapper<OrderEntity, OrderDTO > {

    private final ModelMapper modelMapper;

    public OrderMapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }


    @Override
    public OrderDTO mapToDTO(OrderEntity orderEntity) {
        return modelMapper.map(orderEntity, OrderDTO.class);
    }

    @Override
    public OrderEntity mapToEntity(OrderDTO orderDTO) {
        return modelMapper.map(orderDTO, OrderEntity.class);
    }
}
