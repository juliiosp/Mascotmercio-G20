package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import org.springframework.stereotype.Service;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Actividad;

@Service
public interface ActividadService {
    
    List<Actividad> findAllActividades();
    Actividad createActividad(Actividad Actividad);
    Actividad getActividadById(Long id);
    Actividad updateActividad(Actividad Actividad);
    void deleteActividad(Long id);
}