package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Reserva;

@Repository
public interface ReservaRepository extends CrudRepository<Reserva, Long> {
}
