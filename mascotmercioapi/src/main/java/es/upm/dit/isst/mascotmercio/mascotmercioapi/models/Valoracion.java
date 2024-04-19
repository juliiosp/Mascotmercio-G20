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
public class Valoracion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reseña;
    private String foto;
    private int calificacion;
    private Date fecha;

    @ManyToOne
    @JoinColumn(name = "DUENO_MASCOTA")
    DuenoMascota duenoMascota;

    @ManyToOne
    @JoinColumn(name = "ESTABLECIMIENTO")
    Establecimiento establecimiento;

    public Valoracion() {

    }

    public Valoracion(Establecimiento establecimiento, DuenoMascota duenoMascota, long id, String reseña, String foto, int calificacion, Date fecha) {
        this.id = id;
        this.reseña = reseña;
        this.foto = foto;
        this.calificacion = calificacion;
        this.fecha = fecha;
        this.duenoMascota = duenoMascota;
        this.establecimiento = establecimiento;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getReseña() {
        return reseña;
    }

    public void setReseña(String reseña) {
        this.reseña = reseña;
    }

    public String getFoto() {
        return foto;
    }

    public void setFoto(String foto) {
        this.foto = foto;
    }

    public int getCalificacion() {
        return calificacion;
    }

    public void setCalificacion(int calificacion) {
        this.calificacion = calificacion;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public DuenoMascota getDuenoMascota() {
        return duenoMascota;
    }

    public void setDuenoMascota(DuenoMascota duenoMascota) {
        this.duenoMascota = duenoMascota;
    }

    public Establecimiento getEstablecimiento() {
        return establecimiento;
    }

    public void setEstablecimiento(Establecimiento establecimiento) {
        this.establecimiento = establecimiento;
    }

}
