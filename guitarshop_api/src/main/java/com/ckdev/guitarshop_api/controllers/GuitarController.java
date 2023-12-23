package com.ckdev.guitarshop_api.controllers;

import com.ckdev.guitarshop_api.mappers.Mapper;
import com.ckdev.guitarshop_api.models.DTOs.GuitarDTO;
import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.services.Impl.GuitarServiceImpl;
import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@Log
public class GuitarController {

    private final GuitarServiceImpl guitarServiceObj;
    private final Mapper<GuitarEntity, GuitarDTO> guitarMapperObj;

    public GuitarController( Mapper<GuitarEntity, GuitarDTO> guitarMapper, GuitarServiceImpl guitarService) {
        this.guitarServiceObj = guitarService;
        this.guitarMapperObj = guitarMapper;
    }

    @PostMapping(path = "/guitars")
    public GuitarDTO createGuitar(@RequestBody GuitarDTO guitar) {
        GuitarEntity guitarentity = guitarMapperObj.mapToEntity(guitar);
        GuitarEntity savedGuitarEntity = guitarServiceObj.createGuitar(guitarentity);
        return guitarMapperObj.mapToDTO(savedGuitarEntity);
    }

    @GetMapping(path = "/guitars")
    public List<GuitarDTO> getAllGuitars(){
        List<GuitarEntity> allGuitars = guitarServiceObj.getAllGuitars();
        return allGuitars
                .stream()
                .map(guitarMapperObj::mapToDTO)
                .collect(Collectors.toList());
    }

}

