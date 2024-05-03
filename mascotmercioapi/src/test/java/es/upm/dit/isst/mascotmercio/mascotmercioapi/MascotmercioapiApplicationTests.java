package es.upm.dit.isst.mascotmercio.mascotmercioapi;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;


import java.util.Date;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.DuenoEstablecimiento;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.DuenoMascota;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Establecimiento;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Reserva;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Valoracion;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.models.Actividad;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.repository.DuenoEstablecimientoRepository;
import es.upm.dit.isst.mascotmercio.mascotmercioapi.repository.DuenoMascotaRepository;

@SpringBootTest
public class MascotmercioapiApplicationTests {
    @Autowired
    private DuenoEstablecimientoRepository duenoEstablecimientoRepository;

    @Autowired
    private DuenoMascotaRepository duenoMascotaRepository;

	@Test
	void contextLoads() {
	}
	// DuenoEstablecimiento object can be created with valid input parameters
    @Test
    public void testCreateDuenoEstablecimiento() {
        DuenoEstablecimiento dueno = new DuenoEstablecimiento();
        dueno.setEmail("irene@ejemplo.com");
        dueno.setNombre("irene");
        dueno.setTelefono(987656654);
        dueno.setContraseña("1234");

        duenoEstablecimientoRepository.save(dueno);
        long IDduenoEstablecimiento= dueno.getId();

        Optional<DuenoEstablecimiento> dueno2= duenoEstablecimientoRepository.findById(IDduenoEstablecimiento);
        assertEquals(dueno2.get().getEmail(), "irene@ejemplo.com");
        assertEquals(dueno2.get().getNombre(), "irene");
        assertEquals(dueno2.get().getTelefono(), 987656654);

        duenoEstablecimientoRepository.delete(dueno);
        dueno2 = duenoEstablecimientoRepository.findById(IDduenoEstablecimiento);
        assertFalse(dueno2.isPresent());        

    }

    @Test
    public void testCreateDuenoMascota(){
        DuenoMascota duenoM = new DuenoMascota();
        duenoM.setEmail("maria@ejemplo.com");
        duenoM.setNombre("Maria");
        duenoM.setDireccion("Calle La Paz, 18");
        duenoM.setTelefono(123456789);
        duenoM.setContraseña("perro");

        duenoMascotaRepository.save(duenoM);
        long IDduenoMascota= duenoM.getId();

        Optional<DuenoMascota> duenoM2= duenoMascotaRepository.findById(IDduenoMascota);
        assertEquals(duenoM2.get().getEmail(), "maria@ejemplo.com");
        assertEquals(duenoM2.get().getNombre(), "Maria");
        assertEquals(duenoM2.get().getTelefono(), 123456789);

        duenoMascotaRepository.delete(duenoM);
        duenoM2 = duenoMascotaRepository.findById(IDduenoMascota);
        assertFalse(duenoM2.isPresent());   

    }

    // Create an instance of Actividad with valid parameters and verify that all attributes are correctly set
    @Test  
    public void testCreateActividad() {
        // Arrange
        Long id = 1L;
        String nombre = "Actividad 1";
        String descripcion = "Descripción de la actividad";
        Date disponibilidad = new Date(System.currentTimeMillis());
        int precio = 100;
        Long establecimientoId = 1L;

        // Act
        Actividad actividad = new Actividad(id, nombre, descripcion, new java.sql.Date(disponibilidad.getTime()), precio, establecimientoId);

        // Assert
        assertEquals(id, actividad.getId());
        assertEquals(nombre, actividad.getNombre());
        assertEquals(descripcion, actividad.getDescripcion());
        assertEquals(disponibilidad.getTime(), actividad.getDisponibilidad().getTime());
        assertEquals(precio, actividad.getPrecio());
        assertEquals(establecimientoId, actividad.getEstablecimientoId());
    }


    // creating a new instance of Establecimiento with valid parameters should set the corresponding attributes correctly
    @Test
    public void testCreateEstablecimiento() {
        Establecimiento establecimiento = new Establecimiento();
        establecimiento.setId(1L);
        establecimiento.setNombre("Establecimiento 1");
        establecimiento.setTelefono(1234567890);
        establecimiento.setDireccion("Address 1");
        establecimiento.setEmail("email@example.com");
        establecimiento.setDuenoEstablecimientoId(2L);
    
        assertEquals(1L, establecimiento.getId());
        assertEquals("Establecimiento 1", establecimiento.getNombre());
        assertEquals(1234567890, establecimiento.getTelefono());
        assertEquals("Address 1", establecimiento.getDireccion());
        assertEquals("email@example.com", establecimiento.getEmail());
        assertEquals(2L, establecimiento.getDuenoEstablecimientoId());
    }
    



    @Test
    public void testCreateReserva() {
        // Arrange
        Long duenoMascotaId = 1L;
        Long actividadId = 2L;
        Long id = 3L;
        Date fecha = new Date(System.currentTimeMillis());
        int numpersonas = 4;
        int nummascotas = 5;

        // Act
        Reserva reserva = new Reserva(duenoMascotaId, actividadId, id, new java.sql.Date(fecha.getTime()), numpersonas, nummascotas);


        // Assert
        assertNotNull(reserva);
        assertEquals(duenoMascotaId, reserva.getDuenoMascotaId());
        assertEquals(actividadId, reserva.getActividadId());
        assertEquals(id, reserva.getId());
        assertEquals(fecha.getTime(), reserva.getFecha().getTime());
        assertEquals(numpersonas, reserva.getNumpersonas());
        assertEquals(nummascotas, reserva.getNummascotas());
    }


    // Create a Valoracion object with all fields set and verify that all fields are correctly set.
    @Test
    public void testCreateValoracion() {
        // Arrange
        Long establecimientoId = 1L;
        Long duenoMascotaId = 2L;
        Long id = 3L;
        String reseña = "Great place!";
        String foto = "photo.jpg";
        int calificacion = 5;
        Date fecha = new Date(System.currentTimeMillis());

        // Act
        Valoracion valoracion = new Valoracion(establecimientoId, duenoMascotaId, id, reseña, foto, calificacion, new java.sql.Date(fecha.getTime()));

        // Assert
        assertEquals(establecimientoId, valoracion.getEstablecimientoId());
        assertEquals(duenoMascotaId, valoracion.getDuenoMascotaId());
        assertEquals(id, valoracion.getId());
        assertEquals(reseña, valoracion.getReseña());
        assertEquals(foto, valoracion.getFoto());
        assertEquals(calificacion, valoracion.getCalificacion());
        assertEquals(fecha.getTime(), valoracion.getFecha().getTime());
    }

}

