package es.upm.dit.isst.mascotmercio.mascotmercioapi.controllers;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.DuenoEstablecimiento;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.repository.DuenoEstablecimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/duenosEstablecimient") // URL base para el controlador 
public class DuenoEstablecimientoController {

    @Autowired
    private DuenoEstablecimientoRepository duenoEstablecimientoRepository;

    // Obtener todos los dueños de establecimientos
    @GetMapping
    public ResponseEntity<Iterable<DuenoEstablecimiento>> getAllOwners(){
        Iterable<DuenoEstablecimiento> duenos = duenoEstablecimientoRepository.findAll();
        return new ResponseEntity<>(duenos, HttpStatus.OK);
  }

    // Obtener dueño por ID
    @GetMapping("/{id}")
    public ResponseEntity<DuenoEstablecimiento> getOwnerById(@PathVariable Long id) {
        Optional<DuenoEstablecimiento> dueno = duenoEstablecimientoRepository.findById(id);
        return dueno.map(value -> ResponseEntity.ok(value))
                     .orElseGet(() -> ResponseEntity.notFound().build()); 
    }

    // Crear nuevo dueño de establecimiento
    @PostMapping
    public ResponseEntity<DuenoEstablecimiento> createOwner(@RequestBody DuenoEstablecimiento newDueno) {
        try {
            DuenoEstablecimiento savedDueno = duenoEstablecimientoRepository.save(newDueno);
            return new ResponseEntity<>(savedDueno, HttpStatus.CREATED); 
        } catch (Exception e) { // Puedes manejar excepciones específicas aquí
            return ResponseEntity.badRequest().build();
        }
    }

    // Actualizar un dueño de establecimiento
    @PutMapping("/{id}")
    public ResponseEntity<DuenoEstablecimiento> updateOwner(@PathVariable Long id, @RequestBody DuenoEstablecimiento updatedDueno) {
        return duenoEstablecimientoRepository.findById(id)
                .map(dueno -> {
                    dueno.setNombre(updatedDueno.getNombre());
                    dueno.setTelefono(updatedDueno.getTelefono());
                    dueno.setDireccion(updatedDueno.getDireccion());
                    dueno.setEmail(updatedDueno.getEmail());
                    dueno.setContraseña(updatedDueno.getContraseña());
                    return ResponseEntity.ok(duenoEstablecimientoRepository.save(dueno));
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Eliminar dueño de establecimiento
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteOwner(@PathVariable Long id) {
        try {
            duenoEstablecimientoRepository.deleteById(id);
            return ResponseEntity.noContent().build(); 
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }
}

