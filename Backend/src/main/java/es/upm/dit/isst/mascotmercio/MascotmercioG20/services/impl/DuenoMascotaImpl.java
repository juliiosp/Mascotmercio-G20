package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoMascota;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.duenomascotaRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.DuenoMascotaService;

public class DuenoMascotaImpl implements DuenoMascotaService{
    private duenomascotaRepository duenoMascotaRepository;

    @Autowired
    public DuenoMascotaImpl(duenomascotaRepository duenoMascotaRepository) {
        this.duenoMascotaRepository = duenoMascotaRepository;
    }

    @Override
    public List<DuenoMascota> findAllDuenoMascotas() {
         List<DuenoMascota> duenomascotas = (List<DuenoMascota>) duenoMascotaRepository.findAll();
         return duenomascotas;
    }
    // DuenoMascota createDuenoMascota(DuenoMascota duenoMascota);
    // DuenoMascota getDuenoMascotaById(Long id);
    // DuenoMascota updateDuenoMascota(DuenoMascota duenoMascota);
    // DuenoMascota deleteDuenoMascota(Long id);

    @Override
    public DuenoMascota createDuenoMascota(DuenoMascota duenoMascota) {
        return duenoMascotaRepository.save(duenoMascota);
    }

    @Override
    public DuenoMascota getDuenoMascotaById(Long id) {
        Optional<DuenoMascota> duenoMascota = duenoMascotaRepository.findById(id);
        if(duenoMascota.isPresent()){
            return duenoMascota.get();
        } else {
            throw new RuntimeException("Dueño de Mascota con id " + id + " no encontrado");
        }
    }

    @Override
    public DuenoMascota updateDuenoMascota(DuenoMascota duenoMascota) {
        return duenoMascotaRepository.save(duenoMascota);
    }

    @Override
    public void deleteDuenoMascota(Long id) {
        duenoMascotaRepository.deleteById(id);
    }

}
    
