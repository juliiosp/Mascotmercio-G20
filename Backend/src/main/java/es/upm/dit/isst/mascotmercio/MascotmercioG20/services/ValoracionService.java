package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Valoracion;

public interface ValoracionService {
    
    List<Valoracion> findAllValoraciones();
}