package es.upm.dit.isst.mascotmercio.mascotmercioapi.models;
import java.sql.Date;
import java.util.Set;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table
public class Actividad {

    // @OneToMany(mappedBy = "actividades")
    // Set<Reserva> reservas;

    // @ManyToOne
    // @JoinColumn(name = "ESTABLECIMIENTO", nullable = false)
    // Establecimiento establecimiento;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private String descripcion;
    private Date disponibilidad;
    private int precio;
    private Long establecimientoId;

    public Actividad(long id, String nombre, String descripcion, Date disponibilidad, int precio, Long establecimientoId) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.disponibilidad = disponibilidad;
        this.precio = precio;
        this.establecimientoId = establecimientoId;
    }

    public Actividad(){
        
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Date getDisponibilidad() {
        return disponibilidad;
    }

    public void setDisponibilidad(Date disponibilidad) {
        this.disponibilidad = disponibilidad;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public Long getEstablecimientoId() {
        return establecimientoId;
    }

    public void setEstablecimientoId(Long establecimientoId) {
        this.establecimientoId = establecimientoId;
    }

}
