import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Integer> {
    // Aquí puedes agregar métodos personalizados si necesitas consultas específicas
}