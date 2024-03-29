import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "dueños_mascotas")
public class DueñoMascota {
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

    @OneToMany(mappedBy = "dueñoMascota")
    private List<Valoracion> valoraciones;

    @OneToMany(mappedBy = "dueñoMascota")
    private List<Reserva> reservas;

    // Getters y setters
}