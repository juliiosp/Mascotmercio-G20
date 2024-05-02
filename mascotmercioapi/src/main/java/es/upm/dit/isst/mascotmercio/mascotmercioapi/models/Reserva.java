package es.upm.dit.isst.mascotmercio.mascotmercioapi.models;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date fecha;
    private int numpersonas;
    private int nummascotas;
    private Long establecimientoId;
    private Long duenoMascotaId;

    // @ManyToOne
    // @JoinColumn(name = "DUENO_MASCOTA")
    // DuenoMascota duenoMascota;

    // @ManyToOne
    // @JoinColumn(name = "ACTIVIDAD")
    // Actividad actividades;

    public Reserva() {

    }

    public Reserva(Long duenoMascotaId, Long establecimientoId, Long id, Date fecha, int numpersonas, int nummascotas) {
        this.id = id;
        this.fecha = fecha;
        this.numpersonas = numpersonas;
        this.nummascotas = nummascotas;
        this.duenoMascotaId = duenoMascotaId;
        this.establecimientoId = establecimientoId;
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

    public Long getEstablecimientoId() {
        return establecimientoId;
    }

    public void setEstablecimientoId(Long establecimientoId) {
        this.establecimientoId = establecimientoId;
    }
    
    public Long getDuenoMascotaId() {
        return duenoMascotaId;
    }

    public void setDuenoMascotaId(Long duenoMascotaId) {
        this.duenoMascotaId = duenoMascotaId;
    }

}
