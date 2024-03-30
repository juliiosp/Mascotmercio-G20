package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoEstablecimiento;

@Repository
public interface DuenoEstablecimientoRepository extends CrudRepository<DuenoEstablecimiento, Long>{
    DuenoEstablecimiento findByDuenoEstablecimiento(Long id); 
}
