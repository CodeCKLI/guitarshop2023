package com.ckdev.guitarshop_api.controllers;

import com.ckdev.guitarshop_api.mappers.Mapper;
import com.ckdev.guitarshop_api.models.DTOs.GuitarDTO;
import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.services.Impl.GuitarServiceImpl;
import lombok.extern.java.Log;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

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
    public Page<GuitarEntity> getAllGuitars(@RequestParam(defaultValue = "0") Integer pageNo,
                                            @RequestParam(defaultValue = "10") Integer pageSize,
                                            @RequestParam(defaultValue = "false") boolean isSort,
                                            @RequestParam(defaultValue = "") String sortBy,
                                            @RequestParam(defaultValue = "") String dir,
                                            @RequestParam(defaultValue = "false") boolean isFilter,
                                            @RequestParam(defaultValue = "") String brand,
                                            @RequestParam(defaultValue = "") String price
    ){

        log.info(String.valueOf(pageNo));
        log.info(String.valueOf(pageSize));
        log.info(String.valueOf(isSort));
        log.info(String.valueOf(sortBy));
        log.info(String.valueOf(dir));
        log.info(String.valueOf(isFilter));
        log.info(String.valueOf(brand));
        log.info(String.valueOf(price));


        return guitarServiceObj.getAllGuitars(pageNo, pageSize, isSort, sortBy, dir, isFilter, brand, price);
    }

}

