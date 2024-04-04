package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.DuenoMascota;

@Repository
public interface DuenoMascotaRepository extends CrudRepository<DuenoMascota, Long> {
}

