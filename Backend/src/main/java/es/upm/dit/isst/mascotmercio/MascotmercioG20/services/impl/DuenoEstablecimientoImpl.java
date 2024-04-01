package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;
import java.util.Optional;

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

    @Override
    public DuenoEstablecimiento createDuenoEstablecimiento(DuenoEstablecimiento duenoEstablecimiento) {
        return duenoEstablecimientoRepository.save(duenoEstablecimiento);
    }

    @Override
    public DuenoEstablecimiento getDuenoEstablecimientoById(Long id) {
        Optional<DuenoEstablecimiento> duenoEstablecimiento = duenoEstablecimientoRepository.findById(id);
        if(duenoEstablecimiento.isPresent()){
            return duenoEstablecimiento.get();
        } else {
            throw new RuntimeException("Dueño de Establecimiento con id " + id + " no encontrado");
        }
    }

    @Override
    public DuenoEstablecimiento updateDuenoEstablecimiento(DuenoEstablecimiento duenoEstablecimiento) {
        return duenoEstablecimientoRepository.save(duenoEstablecimiento);
    }

    @Override
    public void deleteDuenoEstablecimiento(Long id) {
        duenoEstablecimientoRepository.deleteById(id);
    }
    
}
    
