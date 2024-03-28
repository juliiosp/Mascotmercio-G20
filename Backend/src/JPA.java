@Entity
@Table

import javax.persistence.*;
import java.util.Date;

@Table(name = "dueños_mascotas")
public class Dueño_Mascota{
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

    @OneToMany(mappedBy = "dueño_mascota")
    private List<Valoracion> valoraciones;

    @OneToMany(mappedBy = "dueño_mascota")
    private List<Reserva> reservas;

    @Repository
    public interface Dueno_MascotaRepository extends JpaRepository<Dueno_Mascota, Integer> {

    }
}

@Table(name = "dueños_establecimientos")
public class Dueño_Establecimiento{
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

    @OneToMany(mappedBy = "dueñoEstablecimiento")
    private List<Establecimiento> establecimientos;

    @Repository
    public interface Dueno_EstablecimientoRepository extends JpaRepository<Dueno_Establecimiento, Integer> {
      
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

    @ManyToOne
    @JoinColumn(name="dueño_establecimiento_id")
    private Dueño_Establecimiento dueñoEstablecimiento;

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
    private Integer calificacion;

    @Column(name="fecha")
    private Date fecha;

    @ManyToOne
    @JoinColumn(name="dueno_mascota_id", referencedColumnName="id")
    private Dueño_Mascota dueñoMascota;

    @ManyToOne
    @JoinColumn(name="establecimiento_id", referencedColumnName="id")
    private Establecimiento establecimiento;
    
    @Repository
    public interface ValoracionesRepository extends JpaRepository<Valoracion, Integer> {
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

    @OneToMany(mappedBy="actividad")
    private List<Reserva> reservas;

    // @ManyToOne
    // @JoinColumn(name="actividad_id")
    // private Actividad actividad;

    @Repository
    public interface ActividadesRepository extends JpaRepository<Actividad, Integer> {    

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
    @JoinColumn(name="dueño_mascotas_id", referencedColumnName="id")
    private Dueño_Mascota dueñoMascota;

    // @ManyToOne
    // @JoinColumn(name="establecimiento_id")
    // private Establecimiento establecimiento;

    @ManyToOne
    private Actividad actividades;

    @Repository
    public interface ReservasRepository extends JpaRepository<Reserva, Integer> {

    }
}

