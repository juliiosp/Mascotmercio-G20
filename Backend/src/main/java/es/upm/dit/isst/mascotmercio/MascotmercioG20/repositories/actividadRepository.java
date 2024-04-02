package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Actividad;

@Repository
public interface actividadRepository extends CrudRepository<Actividad, Long>{
    Actividad findByActividad(Long id);
}
