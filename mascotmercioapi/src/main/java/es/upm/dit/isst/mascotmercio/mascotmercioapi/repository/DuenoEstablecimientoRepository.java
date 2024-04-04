package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.DuenoEstablecimiento;

@Repository
public interface DuenoEstablecimientoRepository extends CrudRepository<DuenoEstablecimiento, Long> {
}
