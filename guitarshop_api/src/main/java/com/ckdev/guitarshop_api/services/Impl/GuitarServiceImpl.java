package com.ckdev.guitarshop_api.services.Impl;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.repositories.GuitarRepo;
import com.ckdev.guitarshop_api.services.GuitarService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class GuitarServiceImpl implements GuitarService {

    private GuitarRepo guitarRepo;

    public GuitarServiceImpl(GuitarRepo guitarRepo) {
        this.guitarRepo = guitarRepo;
    }

    @Override
    public GuitarEntity createGuitar(GuitarEntity guitar) {
        return guitarRepo.save(guitar);
    }

    @Override
    public List<GuitarEntity> getAllGuitars() {
        return StreamSupport
                .stream(guitarRepo.findAll().spliterator(), false)
                .collect(Collectors.toList());
    }

    @Override
    public Optional<GuitarEntity> getOneGuitar(Long id) {
        return guitarRepo.findById(id);
    }


}
