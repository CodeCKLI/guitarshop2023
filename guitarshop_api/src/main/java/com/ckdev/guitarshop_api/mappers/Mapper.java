package com.ckdev.guitarshop_api.mappers;

public interface Mapper<E, D> {

    D mapToDTO(E e);

    E mapToEntity(D d);

}
