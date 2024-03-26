import javax.persistence.*;
import java.util.Date;
import java.util.List;



@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private Date fecha;
    private Integer numeroDePersonas;
    private Integer numeroDeMascotas;

    @ManyToOne
    @JoinColumn(name = "dueño_mascotas_id")
    private DueñoMascota dueñoMascota;

    @ManyToOne
    private Actividad actividad;

    // Getters y setters
}