package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Valoracion;

@Repository
public interface valoracionRepository extends CrudRepository<Valoracion, Long>{
    Valoracion findByValoracion(Long id);
}
