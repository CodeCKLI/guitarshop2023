package com.ckdev.guitarshop_api.services;

import com.ckdev.guitarshop_api.models.DTOs.GuitarDTO;
import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


public interface GuitarService {
    GuitarEntity createGuitar(GuitarEntity guitar);
    List<GuitarEntity> getAllGuitars();
    Optional<GuitarEntity> getOneGuitar(Long id);
}
