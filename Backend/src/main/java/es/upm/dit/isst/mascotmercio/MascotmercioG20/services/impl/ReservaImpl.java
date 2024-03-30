package es.upm.dit.isst.mascotmercio.MascotmercioG20.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Reserva;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.repositories.ReservaRepository;
import es.upm.dit.isst.mascotmercio.MascotmercioG20.services.ReservaService;

public class ReservaImpl implements ReservaService{
    private ReservaRepository reservaRepository;

    @Autowired
    public ReservaImpl(ReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    @Override
    public List<Reserva> findAllReservas() {
         List<Reserva> reservas = (List<Reserva>) reservaRepository.findAll();
         return reservas;
    }

}
    
