package repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import model.Troca;

import java.util.List;

@Repository
public interface TrocaRepository extends JpaRepository<Troca, Long> {
    List<Troca> findByStatus(String status);
}