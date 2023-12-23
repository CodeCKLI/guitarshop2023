package com.ckdev.guitarshop_api.repositories;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GuitarRepo extends CrudRepository<GuitarEntity, Long> {
}
