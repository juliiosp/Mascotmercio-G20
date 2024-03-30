package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoMascota;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.DuenoMascotaRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.DuenoMascotaService;

public class DuenoMascotaImpl implements DuenoMascotaService{
    private DuenoMascotaRepository duenoMascotaRepository;

    @Autowired
    public DuenoMascotaImpl(DuenoMascotaRepository duenoMascotaRepository) {
        this.duenoMascotaRepository = duenoMascotaRepository;
    }

    @Override
    public List<DuenoMascota> findAllDuenoMascotas() {
         List<DuenoMascota> duenomascotas = (List<DuenoMascota>) duenoMascotaRepository.findAll();
         return duenomascotas;
    }

}
    
