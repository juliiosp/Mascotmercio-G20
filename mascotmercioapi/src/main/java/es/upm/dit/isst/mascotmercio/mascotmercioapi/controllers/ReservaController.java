package es.upm.dit.isst.mascotmercio.mascotmercioapi.controllers;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Reserva;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/reservas")
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    // Obtener todas las reservas
    @GetMapping
    public ResponseEntity<Iterable<Reserva>> getAllReservas() {
        Iterable<Reserva> reservas = reservaRepository.findAll();
        return new ResponseEntity<>(reservas, HttpStatus.OK);
    }

    // Obtener una reserva por ID
    @GetMapping("/{id}")
    public ResponseEntity<Reserva> getReservaById(@PathVariable Long id) {
        Optional<Reserva> reservaOptional = reservaRepository.findById(id);
        if (reservaOptional.isPresent()) {
            return new ResponseEntity<>(reservaOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Crear una nueva reserva
    @PostMapping
    public ResponseEntity<Reserva> createReserva(@RequestBody Reserva reserva) {
        Reserva savedReserva = reservaRepository.save(reserva);
        return new ResponseEntity<>(savedReserva, HttpStatus.CREATED);
    }

    // Actualizar una reserva existente
    @PutMapping("/{id}")
    public ResponseEntity<Reserva> updateReserva(@PathVariable Long id, @RequestBody Reserva reserva) {
        Optional<Reserva> reservaOptional = reservaRepository.findById(id);
        if (reservaOptional.isPresent()) {
            Reserva existingReserva = reservaOptional.get();
            // Aquí puedes agregar código para actualizar los campos necesarios
            // Ejemplo: existingReserva.setFecha(reserva.getFecha());
            Reserva updatedReserva = reservaRepository.save(existingReserva);
            return new ResponseEntity<>(updatedReserva, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // Eliminar una reserva
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteReserva(@PathVariable Long id) {
        if (reservaRepository.existsById(id)) {
            reservaRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
