package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Reserva;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.reservaRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.ReservaService;

public class ReservaImpl implements ReservaService{
    private reservaRepository reservaRepository;

    @Autowired
    public ReservaImpl(reservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Override
    public List<Reserva> findAllReservas() {
         List<Reserva> reservas = (List<Reserva>) reservaRepository.findAll();
         return reservas;
    }

    @Override
    public Reserva createReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @Override
    public Reserva getReservaById(Long id) {
        Optional<Reserva> reserva = reservaRepository.findById(id);
        if(reserva.isPresent()){
            return reserva.get();
        } else {
            throw new RuntimeException("Dueño de Establecimiento con id " + id + " no encontrado");
        }
    }

    @Override
    public Reserva updateReserva(Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @Override
    public void deleteReserva(Long id) {
        reservaRepository.deleteById(id);
    }

}
    
