import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "valoraciones")
public class Valoracion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String reseña;
    private String foto;
    private Integer calificacion;
    private Date fecha;

    @ManyToOne
    @JoinColumn(name = "dueno_mascota_id")
    private DueñoMascota dueñoMascota;

    @ManyToOne
    @JoinColumn(name = "establecimiento_id")
    private Establecimiento establecimiento;

    // Getters y setters
}