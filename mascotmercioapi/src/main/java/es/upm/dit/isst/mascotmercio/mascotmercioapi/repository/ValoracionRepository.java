package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Valoracion;

@Repository
public interface ValoracionRepository extends CrudRepository<Valoracion, Long>{
}

