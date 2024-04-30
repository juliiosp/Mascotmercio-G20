package es.upm.dit.isst.mascotmercio.mascotmercioapi.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Establecimiento;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Valoracion;

import java.util.List;

@Repository
public interface ValoracionRepository extends CrudRepository<Valoracion, Long>{
    List<Valoracion> findValoracionesByEstablecimientoId(Long id);
}

