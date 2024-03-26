import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "establecimientos")
public class Establecimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private Integer telefono;
    private String mail;
    private String direccion;

    @ManyToOne
    @JoinColumn(name = "dueño_establecimiento_id")
    private DueñoEstablecimiento dueñoEstablecimiento;

    @OneToMany(mappedBy = "establecimiento")
    private List<Valoracion> valoraciones;

    @OneToMany(mappedBy = "establecimiento")
    private List<Actividad> actividades;

    // Getters y setters
}