import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "dueños_establecimientos")
public class DueñoEstablecimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nombre;
    private Integer telefono;
    private String direccion;
    private String mail;
    private String contraseña;

    @OneToMany(mappedBy = "dueñoEstablecimiento")
    private List<Establecimiento> establecimientos;

    // Getters y setters
}