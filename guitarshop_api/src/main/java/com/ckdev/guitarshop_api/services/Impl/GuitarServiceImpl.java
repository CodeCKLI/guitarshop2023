package com.ckdev.guitarshop_api.services.Impl;

import com.ckdev.guitarshop_api.models.Entities.GuitarEntity;
import com.ckdev.guitarshop_api.repositories.GuitarRepo;
import com.ckdev.guitarshop_api.services.GuitarService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class GuitarServiceImpl implements GuitarService {

    private final GuitarRepo guitarRepo;

    public GuitarServiceImpl(GuitarRepo guitarRepo) {
        this.guitarRepo = guitarRepo;
    }

    @Override
    public GuitarEntity createGuitar(GuitarEntity guitar) {
        return guitarRepo.save(guitar);
    }


    @Override
    public Page<GuitarEntity> getAllGuitars(Integer pageNo,
                                            Integer pageSize,
                                            boolean isSort,
                                            String sortBy,
                                            String dir,
                                            boolean isFilter,
                                            String brand,
                                            String price
                                            ) {


        
        if(Objects.equals(isSort, false) && Objects.equals(isFilter, false) ){
            Pageable paging = PageRequest.of(pageNo, pageSize);
            return guitarRepo.findAll(paging);
        }

        if(Objects.equals(isSort, true) && Objects.equals(isFilter, false) ){

            if(Objects.equals(dir, "dec")) {
                Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy).descending());
                return guitarRepo.findAll(paging);
            } else {
                Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
                return guitarRepo.findAll(paging);
            }

        }

        if(Objects.equals(isSort, false) && Objects.equals(isFilter, true) ){

            Pageable paging = PageRequest.of(pageNo, pageSize);

            if(!brand.isBlank() && !price.isBlank()){
                if(price.equals("under500")){
                    return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 500.00, paging);
                }
                if(price.equals("under1000")){
                    return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 1000.00, paging);
                }
                if(price.equals("under9999")){
                    return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 9999.00, paging);
                }
            }

            if(!brand.isBlank()){
                return guitarRepo.findByBrandContaining(brand, paging);
            }

            if(!price.isBlank()){
                if(price.equals("under500")){
                    return  guitarRepo.findByPriceLessThan(500.00, paging);
                }
                if(price.equals("under1000")){
                    return  guitarRepo.findByPriceLessThan(1000.00, paging);
                }
                if(price.equals("under9999")){
                    return  guitarRepo.findByPriceLessThan(9999.00, paging);
                }
            }



        }

        if(Objects.equals(isSort, true) && Objects.equals(isFilter, true) ){

            if(Objects.equals(dir, "dec")) {
                Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy).descending());

                if(!brand.isBlank() && !price.isBlank()){
                    if(price.equals("under500")){
                        return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 500.00, paging);
                    }
                    if(price.equals("under1000")){
                        return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 1000.00, paging);
                    }
                    if(price.equals("under9999")){
                        return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 9999.00, paging);
                    }
                }

                if(!brand.isBlank()){
                    return guitarRepo.findByBrandContaining(brand, paging);
                }

                if(!price.isBlank()){
                    if(price.equals("under500")){
                        return  guitarRepo.findByPriceLessThan(500.00, paging);
                    }
                    if(price.equals("under1000")){
                        return  guitarRepo.findByPriceLessThan(1000.00, paging);
                    }
                    if(price.equals("under9999")){
                        return  guitarRepo.findByPriceLessThan(9999.00, paging);
                    }
                }
            } else {
                Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));

                if(!brand.isBlank() && !price.isBlank()){
                    if(price.equals("under500")){
                        return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 500.00, paging);
                    }
                    if(price.equals("under1000")){
                        return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 1000.00, paging);
                    }
                    if(price.equals("under9999")){
                        return  guitarRepo.findByBrandContainingAndPriceLessThan(brand, 9999.00, paging);
                    }
                }

                if(!brand.isBlank()){
                    return guitarRepo.findByBrandContaining(brand, paging);
                }

                if(!price.isBlank()){
                    if(price.equals("under500")){
                        return  guitarRepo.findByPriceLessThan(500.00, paging);
                    }
                    if(price.equals("under1000")){
                        return  guitarRepo.findByPriceLessThan(1000.00, paging);
                    }
                    if(price.equals("under9999")){
                        return  guitarRepo.findByPriceLessThan(9999.00, paging);
                    }
                }
            }


        }

        return null;


    }

    @Override
    public Optional<GuitarEntity> getOneGuitar(Long id) {
        return guitarRepo.findById(id);
    }


}
