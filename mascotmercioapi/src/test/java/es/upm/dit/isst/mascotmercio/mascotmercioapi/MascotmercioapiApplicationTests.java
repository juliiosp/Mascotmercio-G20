package es.upm.dit.isst.mascotmercio.mascotmercioapi;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

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
import es.upm.dit.isst.mascotmercio.mascotmercioapi.repository.ActividadRepository;
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
    public void test_createDuenoEstablecimiento_validInput() {
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
    public void test_createDuenoMascota_validInput(){
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
	public void test_create_instance_with_all_attributes() {
		// Arrange
		Long id = 1L;
		String nombre = "Actividad 1";
		String descripcion = "Descripción de la actividad";
		java.util.Date disponibilidad = new java.util.Date(System.currentTimeMillis());
		int precio = 100;
		Long establecimientoId = 1L;

		// Act
		Actividad actividad = new Actividad(id, nombre, descripcion, new java.sql.Date(disponibilidad.getTime()), precio, establecimientoId);

		// Assert
		assertEquals(id, actividad.getId());
		assertEquals(nombre, actividad.getNombre());
		assertEquals(descripcion, actividad.getDescripcion());
		assertEquals(new java.sql.Date(disponibilidad.getTime()), actividad.getDisponibilidad());
		assertEquals(precio, actividad.getPrecio());
		assertEquals(establecimientoId, actividad.getEstablecimientoId());
	}

    // creating a new instance of Establecimiento with valid parameters should set the corresponding attributes correctly
    @Test
    public void test_valid_parameters() {
        Establecimiento establecimiento = new Establecimiento(1L, "Establecimiento 1", 1234567890, "Address 1", "email@example.com", 2L);
    
        assertEquals(1L, establecimiento.getId());
        assertEquals("Establecimiento 1", establecimiento.getNombre());
        assertEquals(1234567890, establecimiento.getTelefono());
        assertEquals("Address 1", establecimiento.getDireccion());
        assertEquals("email@example.com", establecimiento.getEmail());
        assertEquals(2L, establecimiento.getDuenoEstablecimientoId());
    }



    // Reserva object can be created with valid parameters
    @Test
    public void test_createReservaWithValidParameters() {
        // Arrange
        Long duenoMascotaId = 1L;
        Long actividadId = 2L;
        Long id = 3L;
        Date fecha = new Date(System.currentTimeMillis());
        int numpersonas = 4;
        int nummascotas = 5;

        // Change the act
        Reserva reserva = new Reserva();

        // Act
        reserva.setDuenoMascotaId(duenoMascotaId);
        reserva.setActividadId(actividadId);
        reserva.setId(id);
        reserva.setFecha((java.sql.Date) fecha);
        reserva.setNumpersonas(numpersonas);
        reserva.setNummascotas(nummascotas);

        // Assert
        assertNotNull(reserva);
        assertEquals(duenoMascotaId, reserva.getDuenoMascotaId());
        assertEquals(actividadId, reserva.getActividadId());
        assertEquals(id, reserva.getId());
        assertEquals(fecha, reserva.getFecha());
        assertEquals(numpersonas, reserva.getNumpersonas());
        assertEquals(nummascotas, reserva.getNummascotas());
    }


    // Create a Valoracion object with all fields set and verify that all fields are correctly set.
    @Test
    public void test_create_valoracion_with_all_fields_set() {
        // Arrange
        Long establecimientoId = 1L;
        Long duenoMascotaId = 2L;
        Long id = 3L;
        String reseña = "Great place!";
        String foto = "photo.jpg";
        int calificacion = 5;
        Date fecha = new Date(System.currentTimeMillis());

        // Act
        Valoracion valoracion = new Valoracion(establecimientoId, duenoMascotaId, id, reseña, foto, calificacion, (java.sql.Date) fecha);

        // Assert
        assertEquals(establecimientoId, valoracion.getEstablecimientoId());
        assertEquals(duenoMascotaId, valoracion.getDuenoMascotaId());
        assertEquals(id, valoracion.getId());
        assertEquals(reseña, valoracion.getReseña());
        assertEquals(foto, valoracion.getFoto());
        assertEquals(calificacion, valoracion.getCalificacion());
        assertEquals(fecha, valoracion.getFecha());
    }

}

