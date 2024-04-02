package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Reserva;

@Repository
public interface reservaRepository extends CrudRepository<Reserva, Long> {
    Reserva findByReserva(Long id);
}
