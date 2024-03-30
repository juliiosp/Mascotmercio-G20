package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import org.springframework.stereotype.Service;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoMascota;

@Service
public interface DuenoMascotaService {
    
    List<DuenoMascota> findAllDuenoMascotas();
    DuenoMascota createDuenoMascota(DuenoMascota duenoMascota);
    DuenoMascota getDuenoMascotaById(Long id);
    DuenoMascota updateDuenoMascota(DuenoMascota duenoMascota);
    void deleteDuenoMascota(Long id);

}