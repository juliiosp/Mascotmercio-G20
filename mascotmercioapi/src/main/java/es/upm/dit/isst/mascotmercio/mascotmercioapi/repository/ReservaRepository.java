package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Reserva;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.DuenoMascota;

import java.util.List;

@Repository
public interface ReservaRepository extends CrudRepository<Reserva, Long> {
    List<Reserva> findByDuenoMascotaId(Long id);
    List<Reserva> findByEstablecimientoId(Long id);
}
