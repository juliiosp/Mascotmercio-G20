package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Actividad;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.actividadRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.ActividadService;

public class ActividadImpl implements ActividadService{
    private actividadRepository actividadRepository;

    @Autowired
    public ActividadImpl(actividadRepository actividadRepository) {
        this.actividadRepository = actividadRepository;
    }

    @Override
    public List<Actividad> findAllActividades() {
         List<Actividad> actividades = (List<Actividad>) actividadRepository.findAll();
         return actividades;
    }

    @Override
    public Actividad createActividad(Actividad actividad) {
        return actividadRepository.save(actividad);
    }

    @Override
    public Actividad getActividadById(Long id) {
        Optional<Actividad> actividad = actividadRepository.findById(id);
        if(actividad.isPresent()){
            return actividad.get();
        } else {
            throw new RuntimeException("Dueño de Establecimiento con id " + id + " no encontrado");
        }
    }

    @Override
    public Actividad updateActividad(Actividad actividad) {
        return actividadRepository.save(actividad);
    }

    @Override
    public void deleteActividad(Long id) {
        actividadRepository.deleteById(id);
    }

}
    
