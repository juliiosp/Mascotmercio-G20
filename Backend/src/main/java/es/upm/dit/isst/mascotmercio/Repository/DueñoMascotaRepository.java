import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DueñoMascotaRepository extends JpaRepository<DuenoMascota, Integer> {
}