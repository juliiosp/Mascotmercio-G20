@Entity
@Table

//¡¡NO ES FINAL!!, queda por cuadrar cosas para la proxima reunion

import javax.persistence.*;
import java.util.Date;

// public class Dueño_Mascota {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id;

//     @Column(name="nombre")
//     private String nombre;

//     @Column(name="telefono")
//     private Int telefono;

//     @Column(name="mail")
//     private String mail;

//     @Column(name="contraseña")
//     private String contraseña;

//     @OneToMany(mappedBy = "dueño_mascota")
//     private List<Valoraciones> valoraciones;

//     @OneToMany(mappedBy = "dueño_mascota")
//     private List<Reserva> reserva;
// }

@Table(name = "usuarios")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nombre")
    private String nombre;

    @Column(name="telefono")
    private Integer telefono;

    @Column(name="direccion")
    private String direccion;

    @Column(name="mail")
    private String mail;

    @Column(name="contraseña")
    private String contraseña;

    @OneToMany(mappedBy = "usuario")
    private List<Valoracion> valoraciones;

    @OneToMany(mappedBy = "usuario")
    private List<Reserva> reservas;

    @Repository
    public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    }
}

@Table(name="establecimientos")
public class Establecimiento{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nombre")
    private String nombre;

    @Column(name="telefono")
    private Integer telefono;

    @Column(name="mail")
    private String mail;

    @Column(name="direccion")
    private String direccion;

    @OneToMany(mappedBy = "establecimiento")
    private List<Valoracion> valoraciones;

    @OneToMany(mappedBy = "establecimiento")
    private List<Actividad> actividades;

    @Repository
    public interface EstablecimientoRepository extends JpaRepository<Establecimiento, Integer> {
    }
}

@Table(name="valoraciones")
public class Valoracion{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="reseña")
    private String reseña;

    @Column(name="foto")
    private String foto;

    @Column(name="calificacion")
    private Integer calificacion

    @Column(name="fecha")
    private Date fecha;

    @ManyToOne
    @JoinColumn(name="usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name="establecimiento_id")
    private Establecimiento establecimiento;

    @Repository
    public interface ValoracionesRepository extends JpaRepository<Establecimiento, Integer> {
  }
}

@Table(name="actividades")
public class Actividad{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="nombre")
    private String nombre;

    @Column(name="descripcion")
    private String descripcion;

    @Column(name="disponibilidad")
    private Date disponibilidad;

    @Column(name="precio")
    private Integer precio;

    @ManyToOne
    @JoinColumn(name="establecimiento_id")
    private Establecimiento establecimiento;

    @ManyToOne
    @JoinColumn(name="actividad_id")
    private Actividad actividad;

    @Repository
    public interface ActividadesRepository extends JpaRepository<Establecimiento, Integer> {    

    }
  }

@Table(name="reservas")
public class Reserva{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="fecha")
    private Date fecha;

    @Column(name="numero_de_personas")
    private Integer numero_de_personas;

    @Column(name="numero_de_mascotas")
    private Integer numero_de_mascotas;

    @ManyToOne
    @JoinColumn(name="usuario_id")
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name="establecimiento_id")
    private Establecimiento establecimiento;

    @OneToMany
    private Actividad actividades;

    @Repository
    public interface ReservasRepository extends JpaRepository<Reservas, Long> {

    }


}