package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;
import java.util.Optional;

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

    @Override
    public Valoracion createValoracion(Valoracion valoracion) {
        return valoracionRepository.save(valoracion);
    }

    @Override
    public Valoracion getValoracionById(Long id) {
        Optional<Valoracion> valoracion = valoracionRepository.findById(id);
        if(valoracion.isPresent()){
            return valoracion.get();
        } else {
            throw new RuntimeException("Dueño de Establecimiento con id " + id + " no encontrado");
        }
    }

    @Override
    public Valoracion updateValoracion(Valoracion valoracion) {
        return valoracionRepository.save(valoracion);
    }

    @Override
    public void deleteValoracion(Long id) {
        valoracionRepository.deleteById(id);
    }
    

}
    
