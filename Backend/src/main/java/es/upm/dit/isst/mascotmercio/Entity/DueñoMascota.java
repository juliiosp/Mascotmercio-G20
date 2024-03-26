import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "dueños_mascotas")
public class DueñoMascota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private Integer telefono;
    private String direccion;
    private String mail;
    private String contraseña;

    @OneToMany(mappedBy = "dueñoMascota")
    private List<Valoracion> valoraciones;

    @OneToMany(mappedBy = "dueñoMascota")
    private List<Reserva> reservas;

    // Getters y setters
}