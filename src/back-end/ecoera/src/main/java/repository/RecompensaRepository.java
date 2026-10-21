package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.Recompensa;

@Repository
public interface RecompensaRepository extends JpaRepository<Recompensa, Long> {
}