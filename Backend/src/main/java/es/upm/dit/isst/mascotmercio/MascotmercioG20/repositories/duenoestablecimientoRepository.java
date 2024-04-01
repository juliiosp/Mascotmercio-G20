package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoEstablecimiento;

@Repository
public interface DuenoEstablecimientoRepository extends CrudRepository<DuenoEstablecimiento, Long> {

    // Métodos de búsqueda (puedes añadir más)
    //Esto esta mal ya que no me deja retornas en controllers todos los dueños de establecimiento.
    DuenoEstablecimiento findByDuenoEstablecimiento(Long id);

}
