package es.upm.dit.isst.mascotmercio.mascotmercioapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Establecimiento {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        
    public Establecimiento(){
        }
}