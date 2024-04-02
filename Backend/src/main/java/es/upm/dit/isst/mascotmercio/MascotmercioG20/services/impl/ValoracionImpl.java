package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Valoracion;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.valoracionRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.ValoracionService;

public class ValoracionImpl implements ValoracionService{
    private valoracionRepository valoracionRepository;

    @Autowired
    public ValoracionImpl(valoracionRepository valoracionRepository) {
        this.valoracionRepository = valoracionRepository;
    }

    @Override
    public List<Valoracion> findAllValoraciones() {
         List<Valoracion> valoraciones = (List<Valoracion>) valoracionRepository.findAll();
         return valoraciones;
    }

}
    
