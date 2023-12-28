package com.ckdev.guitarshop_api.repositories;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GuitarRepo extends CrudRepository<GuitarEntity, Long>,
        PagingAndSortingRepository<GuitarEntity, Long> {

    Page<GuitarEntity> findByBrandContaining(String brand, Pageable pageable);
    Page<GuitarEntity> findByPriceLessThan(Double price, Pageable pageable);
    Page<GuitarEntity> findByBrandContainingAndPriceLessThan(String brand, Double price, Pageable pageable);
    Optional<GuitarEntity> findById(Long guitarID);
    List<GuitarEntity> findByModel(String model);
}
