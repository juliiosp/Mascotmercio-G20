package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Establecimiento;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.establecimientoRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.EstablecimientoService;

public class EstablecimientoImpl implements EstablecimientoService{
    private establecimientoRepository establecimientoRepository;

    @Autowired
    public EstablecimientoImpl(establecimientoRepository establecimientoRepository) {
        this.establecimientoRepository = establecimientoRepository;
    }

    @Override
    public List<Establecimiento> findAllEstablecimientos() {
         List<Establecimiento> establecimientos = (List<Establecimiento>) establecimientoRepository.findAll();
         return establecimientos;
    }

}
    
