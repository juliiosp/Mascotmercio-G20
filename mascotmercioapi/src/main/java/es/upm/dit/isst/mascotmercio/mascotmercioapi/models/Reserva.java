package es.upm.dit.isst.mascotmercio.mascotmercioapi.models;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Reserva {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date fecha;
    private int numpersonas;
    private int nummascotas;

    public Reserva(){
        
    }

    public Reserva(long id, Date fecha, int numpersonas, int nummascotas) {
        this.id = id;
        this.fecha = fecha;
        this.numpersonas = numpersonas;
        this.nummascotas = nummascotas;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public int getNumpersonas() {
        return numpersonas;
    }

    public void setNumpersonas(int numpersonas) {
        this.numpersonas = numpersonas;
    }

    public int getNummascotas() {
        return nummascotas;
    }

    public void setNummascotas(int nummascotas) {
        this.nummascotas = nummascotas;
    }

}
