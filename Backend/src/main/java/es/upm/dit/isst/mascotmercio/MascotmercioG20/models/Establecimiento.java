package es.upm.dit.isst.mascotmercio.MascotmercioG20.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Establecimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long id;
        
    
}
