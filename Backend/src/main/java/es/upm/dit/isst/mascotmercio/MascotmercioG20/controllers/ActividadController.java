package es.upm.dit.isst.mascotmercio.MascotmercioG20.controllers;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Actividad;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.ActividadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/actividades")
public class ActividadController {

    @Autowired
    private ActividadRepository actividadRepository;

    // Obtener todas las actividades
    @GetMapping
    public ResponseEntity<Iterable<Actividad>> getAllActividades() {
        Iterable<Actividad> actividades = actividadRepository.findAll();
        return new ResponseEntity<>(actividades, HttpStatus.OK);
    }

    // Obtener una actividad por ID
    @GetMapping("/{id}")
    public ResponseEntity<Actividad> getActividadById(@PathVariable Long id) {
        Optional<Actividad> actividadOptional = actividadRepository.findById(id);
        if (actividadOptional.isPresent()) {
            return new ResponseEntity<>(actividadOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Crear una nueva actividad
    @PostMapping
    public ResponseEntity<Actividad> createActividad(@RequestBody Actividad actividad) {
        Actividad savedActividad = actividadRepository.save(actividad);
        return new ResponseEntity<>(savedActividad, HttpStatus.CREATED);
    }

    // Actualizar una actividad existente
    @PutMapping("/{id}")
    public ResponseEntity<Actividad> updateActividad(@PathVariable Long id, @RequestBody Actividad actividad) {
        Optional<Actividad> actividadOptional = actividadRepository.findById(id);
        if (actividadOptional.isPresent()) {
            Actividad existingActividad = actividadOptional.get();
            existingActividad.setNombre(actividad.getNombre());
            existingActividad.setDescripcion(actividad.getDescripcion());
            existingActividad.setDisponibilidad(actividad.getDisponibilidad());
            existingActividad.setPrecio(actividad.getPrecio());
            Actividad updatedActividad = actividadRepository.save(existingActividad);
            return new ResponseEntity<>(updatedActividad, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar una actividad
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteActividad(@PathVariable Long id) {
        if (actividadRepository.existsById(id)) {
            actividadRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
