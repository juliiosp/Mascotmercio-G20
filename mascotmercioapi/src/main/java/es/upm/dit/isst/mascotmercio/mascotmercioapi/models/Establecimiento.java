package es.upm.dit.isst.mascotmercio.mascotmercioapi.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.util.Set;

@Entity
@Table
public class Establecimiento {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombre;
    private int telefono;
    private String direccion;
    private String email;
    private Long duenoEstablecimientoId;

    // @ManyToOne
    // @JoinColumn(name = "duenoEstablecimiento", nullable = false)
    // DuenoEstablecimiento duenoEstablecimiento;

    // @OneToMany(mappedBy = "establecimiento")
    // Set<Actividad> actividades;

    // @OneToMany(mappedBy = "establecimiento")
    // Set<Valoracion> valoraciones;

    public Establecimiento(){
        }

    public Establecimiento(Long id, String nombre, int telefono, String direccion, String email, Long duenoEstablecimientoId) {
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
        this.duenoEstablecimientoId = duenoEstablecimientoId;
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

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getDuenoEstablecimientoId() {
        return duenoEstablecimientoId;
    }

    public void setDuenoEstablecimientoId(Long duenoEstablecimientoId) {
        this.duenoEstablecimientoId = duenoEstablecimientoId;
    }
}