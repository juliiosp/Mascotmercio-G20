package es.upm.dit.isst.mascotmercio.mascotmercioapi.controllers;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Valoracion;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.repository.ValoracionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/valoraciones")
public class ValoracionController {

    @Autowired
    private ValoracionRepository valoracionRepository;

    // Obtener todas las valoraciones
    @GetMapping
    public ResponseEntity<Iterable<Valoracion>> getAllValoraciones() {
        Iterable<Valoracion> valoraciones = valoracionRepository.findAll();
        return new ResponseEntity<>(valoraciones, HttpStatus.OK);
    }

    // Obtener una valoración por ID
    @GetMapping("/{id}")
    public ResponseEntity<Valoracion> getValoracionById(@PathVariable Long id) {
        Optional<Valoracion> valoracionOptional = valoracionRepository.findById(id);
        if (valoracionOptional.isPresent()) {
            return new ResponseEntity<>(valoracionOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Crear una nueva valoración
    @PostMapping
    public ResponseEntity<Valoracion> createValoracion(@RequestBody Valoracion valoracion) {
        Valoracion savedValoracion = valoracionRepository.save(valoracion);
        return new ResponseEntity<>(savedValoracion, HttpStatus.CREATED);
    }

    // Actualizar una valoración existente
    @PutMapping("/{id}")
    public ResponseEntity<Valoracion> updateValoracion(@PathVariable Long id, @RequestBody Valoracion valoracion) {
        Optional<Valoracion> valoracionOptional = valoracionRepository.findById(id);
        if (valoracionOptional.isPresent()) {
            Valoracion existingValoracion = valoracionOptional.get();
            // Aquí puedes agregar código para actualizar los campos necesarios
            // Ejemplo: existingValoracion.setReseña(valoracion.getReseña());
            Valoracion updatedValoracion = valoracionRepository.save(existingValoracion);
            return new ResponseEntity<>(updatedValoracion, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar una valoración
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteValoracion(@PathVariable Long id) {
        if (valoracionRepository.existsById(id)) {
            valoracionRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}

