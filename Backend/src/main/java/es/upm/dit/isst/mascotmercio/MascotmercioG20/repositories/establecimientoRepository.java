package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Establecimiento;

@Repository
public interface establecimientoRepository extends CrudRepository<Establecimiento, Long>{
    Establecimiento findByEstablecimiento(Long id);
}
