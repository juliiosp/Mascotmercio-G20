package es.upm.dit.isst.mascotmercio.MascotmercioG20.services;

import java.util.List;

import org.springframework.stereotype.Service;

import es.upm.dit.isst.mascotmercio.MascotmercioG20.models.Reserva;

@Service
public interface ReservaService {
    
    List<Reserva> findAllReservas();
    Reserva createReserva(Reserva Actividad);
    Reserva getReservaById(Long id);
    Reserva updateReserva(Reserva Actividad);
    void deleteReserva(Long id);
}