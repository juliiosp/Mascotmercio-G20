package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import org.springframework.stereotype.Service;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Valoracion;

@Service
public interface ValoracionService {
    
    List<Valoracion> findAllValoraciones();
    Valoracion createValoracion(Valoracion Actividad);
    Valoracion getValoracionById(Long id);
    Valoracion updateValoracion(Valoracion Actividad);
    void deleteValoracion(Long id);
}