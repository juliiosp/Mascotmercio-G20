import javax.persistence.*;
import java.util.Date;
import java.util.List;


@Entity
@Table(name = "dueños_establecimientos")
public class DueñoEstablecimiento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @Column
    private String nombre;
    @Column
    private Integer telefono;
    @Column
    private String direccion;
    @Column
    private String mail;
    @Column
    private String contraseña;

    @OneToMany(mappedBy = "dueñoEstablecimiento")
    private List<Establecimiento> establecimientos;

    // Getters y setters
}