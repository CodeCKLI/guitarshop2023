package com.ckdev.guitarshop_api.services;

import com.ckdev.guitarshop_api.models.DTOs.GuitarDTO;
import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface GuitarService {
    GuitarEntity createGuitar(GuitarEntity guitar);

    Page<GuitarEntity> getAllGuitars(Integer pageNo,
                                     Integer pageSize,
                                     boolean isSort,
                                     String sortBy,
                                     String dir,
                                     boolean isFilter,
                                     String brand,
                                     String price);


    Optional<GuitarEntity> getOneGuitarByID(Long id);

    List<GuitarEntity> getGuitarByModel(String model);


}
