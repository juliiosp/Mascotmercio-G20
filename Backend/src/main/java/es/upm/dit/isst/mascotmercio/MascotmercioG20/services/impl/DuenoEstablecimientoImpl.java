package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoEstablecimiento;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.DuenoEstablecimientoRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.DuenoEstablecimientoService;

public class DuenoEstablecimientoImpl implements DuenoEstablecimientoService{
    private DuenoEstablecimientoRepository duenoEstablecimientoRepository;

    @Autowired
    public DuenoEstablecimientoImpl(DuenoEstablecimientoRepository duenoEstablecimientoRepository) {
        this.duenoEstablecimientoRepository = duenoEstablecimientoRepository;
    }

    @Override
    public List<DuenoEstablecimiento> findAllDuenoEstablecimientos() {
         List<DuenoEstablecimiento> duenoestablecimientos = (List<DuenoEstablecimiento>) duenoEstablecimientoRepository.findAll();
         return duenoestablecimientos;
    }

}
    
