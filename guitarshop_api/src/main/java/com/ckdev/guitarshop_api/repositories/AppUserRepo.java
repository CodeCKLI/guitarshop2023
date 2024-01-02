package com.ckdev.guitarshop_api.repositories;

import com.ckdev.guitarshop_api.models.Entities.AppUserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AppUserRepo extends JpaRepository<AppUserEntity, Integer> {

    Optional<AppUserEntity> findByEmail(String email);

}
