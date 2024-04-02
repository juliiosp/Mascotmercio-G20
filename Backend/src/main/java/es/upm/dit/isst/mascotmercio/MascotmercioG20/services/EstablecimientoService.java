package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import org.springframework.stereotype.Service;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Establecimiento;

@Service
public interface EstablecimientoService {
    
    List<Establecimiento> findAllEstablecimientos();
    Establecimiento createEstablecimiento(Establecimiento establecimiento);
    Establecimiento getEstablecimientoById(Long id);
    Establecimiento updateEstablecimiento(Establecimiento establecimiento);
    void deleteEstablecimiento(Long id);
}