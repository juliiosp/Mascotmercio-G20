import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DueñoEstablecimientoRepository extends JpaRepository<DuenoEstablecimiento, Integer> {
}