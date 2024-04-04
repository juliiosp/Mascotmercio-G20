package es.upm.dit.isst.mascotmercio.mascotmercioapi.models;
import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Valoracion {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String reseña;
    private String foto;
    private int calificacion;
    private Date fecha;

    public Valoracion(long id, String reseña, String foto, int calificacion, Date fecha) {
        this.id = id;
        this.reseña = reseña;
        this.foto = foto;
        this.calificacion = calificacion;
        this.fecha = fecha;
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

}
