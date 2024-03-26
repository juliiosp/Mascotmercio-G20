import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "actividades")
public class Actividad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private String descripcion;
    private Date disponibilidad;
    private Integer precio;

    @ManyToOne
    @JoinColumn(name = "establecimiento_id")
    private Establecimiento establecimiento;

    @OneToMany(mappedBy = "actividad")
    private List<Reserva> reservas;

    // Getters y setters
}