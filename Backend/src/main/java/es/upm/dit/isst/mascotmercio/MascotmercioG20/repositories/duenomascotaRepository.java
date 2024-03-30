package es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoMascota;

@Repository
public interface DuenoMascotaRepository extends CrudRepository<DuenoMascota, Long> {
    DuenoMascota findByDuenoMascota(Long id);  
}
