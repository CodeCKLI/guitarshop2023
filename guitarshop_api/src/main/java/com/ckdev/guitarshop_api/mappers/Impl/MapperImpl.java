package com.ckdev.guitarshop_api.mappers.Impl;

import com.ckdev.guitarshop_api.mappers.Mapper;
import com.ckdev.guitarshop_api.models.DTOs.GuitarDTO;
import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class MapperImpl implements Mapper<GuitarEntity, GuitarDTO> {

    private ModelMapper modelMapper;

    public MapperImpl(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    @Override
    public GuitarDTO mapToDTO(GuitarEntity guitarEntity) {
        return modelMapper.map(guitarEntity, GuitarDTO.class);
    }

    @Override
    public GuitarEntity mapToEntity(GuitarDTO guitarDTO) {
        return modelMapper.map(guitarDTO, GuitarEntity.class);
    }
}
