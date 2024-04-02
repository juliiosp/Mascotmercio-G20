package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Establecimiento createEstablecimiento(Establecimiento establecimiento) {
        return establecimientoRepository.save(establecimiento);
    }

    @Override
    public Establecimiento getEstablecimientoById(Long id) {
        Optional<Establecimiento> establecimiento = establecimientoRepository.findById(id);
        if(establecimiento.isPresent()){
            return establecimiento.get();
        } else {
            throw new RuntimeException("Dueño de Establecimiento con id " + id + " no encontrado");
        }
    }

    @Override
    public Establecimiento updateEstablecimiento(Establecimiento establecimiento) {
        return establecimientoRepository.save(establecimiento);
    }

    @Override
    public void deleteEstablecimiento(Long id) {
        establecimientoRepository.deleteById(id);
    }

}
    
