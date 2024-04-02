package es.upm.dit.isst.mascotmercio.MascotmercioG20.controllers;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.DuenoMascota;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.duenomascotaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/duenos")
public class DuenoMascotaController {

    @Autowired
    private duenomascotaRepository duenoMascotaRepository;

    // Obtener todos los dueños de mascotas
    @GetMapping
    public ResponseEntity<Iterable<DuenoMascota>> getAllDuenoMascotas() {
        Iterable<DuenoMascota> duenos = duenoMascotaRepository.findAll();
        return new ResponseEntity<>(duenos, HttpStatus.OK);
    }

    // Obtener un dueño de mascota por ID
    @GetMapping("/{id}")
    public ResponseEntity<DuenoMascota> getDuenoMascotaById(@PathVariable Long id) {
        Optional<DuenoMascota> duenoOptional = duenoMascotaRepository.findById(id);
        if (duenoOptional.isPresent()) {
            return new ResponseEntity<>(duenoOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Crear un nuevo dueño de mascota
    @PostMapping
    public ResponseEntity<DuenoMascota> createDuenoMascota(@RequestBody DuenoMascota duenoMascota) {
        DuenoMascota savedDuenoMascota = duenoMascotaRepository.save(duenoMascota);
        return new ResponseEntity<>(savedDuenoMascota, HttpStatus.CREATED);
    }

    // Actualizar un dueño de mascota existente
    @PutMapping("/{id}")
    public ResponseEntity<DuenoMascota> updateDuenoMascota(@PathVariable Long id, @RequestBody DuenoMascota duenoMascota) {
        Optional<DuenoMascota> duenoOptional = duenoMascotaRepository.findById(id);
        if (duenoOptional.isPresent()) {
            DuenoMascota existingDuenoMascota = duenoOptional.get();
            // Actualizar solo los campos que no son nulos en la solicitud
            if (duenoMascota.getNombre() != null) {
                existingDuenoMascota.setNombre(duenoMascota.getNombre());
            }
            if (duenoMascota.getDireccion() != null) {
                existingDuenoMascota.setDireccion(duenoMascota.getDireccion());
            }
            if (duenoMascota.getEmail() != null) {
                existingDuenoMascota.setEmail(duenoMascota.getEmail());
            }
            if (duenoMascota.getTelefono() != 0) {
                existingDuenoMascota.setTelefono(duenoMascota.getTelefono());
            }
            if (duenoMascota.getContraseña() != null) {
                existingDuenoMascota.setContraseña(duenoMascota.getContraseña());
            }
            DuenoMascota updatedDuenoMascota = duenoMascotaRepository.save(existingDuenoMascota);
            return new ResponseEntity<>(updatedDuenoMascota, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    

    // Eliminar un dueño de mascota
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteDuenoMascota(@PathVariable Long id) {
        if (!duenoMascotaRepository.existsById(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        duenoMascotaRepository.deleteById(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
