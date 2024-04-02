package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

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

}
    
