package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Actividad;

import java.util.List;

@Repository
public interface ActividadRepository extends CrudRepository<Actividad, Long>{
    List<Actividad> findByEstablecimientoId(Long id);
}
