package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import org.springframework.stereotype.Service;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoEstablecimiento;

@Service
public interface DuenoEstablecimientoService {
    
    List<DuenoEstablecimiento> findAllDuenoEstablecimientos();
    DuenoEstablecimiento createDuenoEstablecimientod(DuenoEstablecimiento duenoEstablecimiento);
    DuenoEstablecimiento getDuenoEstablecimientoById(Long id);
    DuenoEstablecimiento updateDuenoEstablecimiento(DuenoEstablecimiento duenoEstablecimiento);
    void deleteDuenoEstablecimiento(Long id);
}