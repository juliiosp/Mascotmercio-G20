package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

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

}
    
