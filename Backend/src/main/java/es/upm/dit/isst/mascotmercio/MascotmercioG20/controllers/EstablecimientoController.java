package es.upm.dit.isst.mascotmercio.MascotmercioG20.controllers;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Establecimiento;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.EstablecimientoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/establecimientos")
public class EstablecimientoController {

    @Autowired
    private EstablecimientoRepository establecimientoRepository;

    // Obtener todos los establecimientos
    @GetMapping
    public ResponseEntity<Iterable<Establecimiento>> getAllEstablecimientos() {
        Iterable<Establecimiento> establecimientos = establecimientoRepository.findAll();
        return new ResponseEntity<>(establecimientos, HttpStatus.OK);
    }

    // Obtener un establecimiento por ID
    @GetMapping("/{id}")
    public ResponseEntity<Establecimiento> getEstablecimientoById(@PathVariable Long id) {
        Optional<Establecimiento> establecimientoOptional = establecimientoRepository.findById(id);
        if (establecimientoOptional.isPresent()) {
            return new ResponseEntity<>(establecimientoOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Crear un nuevo establecimiento
    @PostMapping
    public ResponseEntity<Establecimiento> createEstablecimiento(@RequestBody Establecimiento establecimiento) {
        Establecimiento savedEstablecimiento = establecimientoRepository.save(establecimiento);
        return new ResponseEntity<>(savedEstablecimiento, HttpStatus.CREATED);
    }

    // Actualizar un establecimiento existente
    @PutMapping("/{id}")
    public ResponseEntity<Establecimiento> updateEstablecimiento(@PathVariable Long id, @RequestBody Establecimiento establecimiento) {
        Optional<Establecimiento> establecimientoOptional = establecimientoRepository.findById(id);
        if (establecimientoOptional.isPresent()) {
            Establecimiento existingEstablecimiento = establecimientoOptional.get();
            // Aquí puedes agregar código para actualizar los campos necesarios
            // Ejemplo: existingEstablecimiento.setNombre(establecimiento.getNombre());
            Establecimiento updatedEstablecimiento = establecimientoRepository.save(existingEstablecimiento);
            return new ResponseEntity<>(updatedEstablecimiento, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar un establecimiento
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteEstablecimiento(@PathVariable Long id) {
        if (establecimientoRepository.existsById(id)) {
            establecimientoRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
